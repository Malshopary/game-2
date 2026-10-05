# Cozy Meadow Farm Launcher
$ErrorActionPreference = "SilentlyContinue"
$projectDir = "f:\apps\game 2"
Set-Location $projectDir

$port = 5173
$url = "http://localhost:$port"

# Function to test connection to localhost:5173
function Test-ServerReady {
    try {
        $tcp = New-Object System.Net.Sockets.TcpClient
        $iar = $tcp.BeginConnect("localhost", $port, $null, $null)
        $ready = $iar.AsyncWaitHandle.WaitOne(400, $false)
        if ($ready -and $tcp.Connected) {
            $tcp.EndConnect($iar)
            $tcp.Close()
            return $true
        }
        $tcp.Close()
    } catch {}
    return $false
}

# If server is not running, launch node in background
if (-not (Test-ServerReady)) {
    Start-Process -FilePath "node.exe" -ArgumentList "node_modules\vite\bin\vite.js" -WorkingDirectory $projectDir -WindowStyle Hidden
    
    # Wait up to 8 seconds for server to be responsive
    $timeout = 8
    $start = Get-Date
    while (-not (Test-ServerReady) -and ((Get-Date) - $start).TotalSeconds -lt $timeout) {
        Start-Sleep -Milliseconds 200
    }
}

# Launch browser in App Mode (Chrome or Edge)
$chromePaths = @(
    "C:\Program Files\Google\Chrome\Application\chrome.exe",
    "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    "$env:LOCALAPPDATA\Google\Chrome\Application\chrome.exe"
)

$edgePaths = @(
    "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    "C:\Program Files\Microsoft\Edge\Application\msedge.exe"
)

$launched = $false

# 1. Try Chrome App mode
foreach ($p in $chromePaths) {
    if (Test-Path $p) {
        Start-Process -FilePath $p -ArgumentList "--app=$url"
        $launched = $true
        break
    }
}

# 2. Try Edge App mode if Chrome wasn't launched
if (-not $launched) {
    foreach ($p in $edgePaths) {
        if (Test-Path $p) {
            Start-Process -FilePath $p -ArgumentList "--app=$url"
            $launched = $true
            break
        }
    }
}

# 3. Fallback to default browser
if (-not $launched) {
    Start-Process $url
}
