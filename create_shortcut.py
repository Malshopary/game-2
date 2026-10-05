import subprocess
import base64

ps_code = """
$desktop = [Environment]::GetFolderPath('Desktop')
$wsh = New-Object -ComObject WScript.Shell

$shortcutPath = Join-Path $desktop "Cozy Farm.lnk"
$s = $wsh.CreateShortcut($shortcutPath)
$s.TargetPath = "wscript.exe"
$s.Arguments = "`"f:\\apps\\game 2\\launch.vbs`""
$s.WorkingDirectory = "f:\\apps\\game 2"
$s.IconLocation = "f:\\apps\\game 2\\game-icon.ico,0"
$s.Description = "Cozy Meadow Farm"
$s.Save()

Write-Host "SHORTCUT_SAVED"
"""

encoded = base64.b64encode(ps_code.encode("utf-16le")).decode("ascii")
proc = subprocess.run(["powershell", "-NoProfile", "-EncodedCommand", encoded], capture_output=True, text=True)
print("STDOUT:", proc.stdout.strip())
if proc.stderr:
    print("STDERR:", proc.stderr.strip())
