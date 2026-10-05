Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = "f:\apps\game 2"
WshShell.CurrentDirectory = currentDir

' 1. Check if server is already responding
isOnline = False
On Error Resume Next
Set http = CreateObject("MSXML2.ServerXMLHTTP.6.0")
http.setTimeouts 500, 500, 500, 500
http.open "GET", "http://localhost:5173/", False
http.send
If Err.Number = 0 Then
    If http.status = 200 Then
        isOnline = True
    End If
End If
Err.Clear
On Error GoTo 0

' 2. If not online, launch Vite server silently via run-server.bat
If Not isOnline Then
    WshShell.Run """" & currentDir & "\run-server.bat""", 0, False
    
    ' Wait for server to come online (up to 8 seconds)
    For i = 1 To 20
        WScript.Sleep 400
        On Error Resume Next
        Set http2 = CreateObject("MSXML2.ServerXMLHTTP.6.0")
        http2.setTimeouts 500, 500, 500, 500
        http2.open "GET", "http://localhost:5173/", False
        http2.send
        If Err.Number = 0 Then
            If http2.status = 200 Then
                isOnline = True
                Exit For
            End If
        End If
        Err.Clear
        On Error GoTo 0
    Next
End If

' 3. Open Game in Standalone App Window (Chrome, Edge, or Default Browser)
chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
chromePathX86 = "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe"
edgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
edgePath64 = "C:\Program Files\Microsoft\Edge\Application\msedge.exe"

If fso.FileExists(chromePath) Then
    WshShell.Run """" & chromePath & """ --app=http://localhost:5173", 1, False
ElseIf fso.FileExists(chromePathX86) Then
    WshShell.Run """" & chromePathX86 & """ --app=http://localhost:5173", 1, False
ElseIf fso.FileExists(edgePath) Then
    WshShell.Run """" & edgePath & """ --app=http://localhost:5173", 1, False
ElseIf fso.FileExists(edgePath64) Then
    WshShell.Run """" & edgePath64 & """ --app=http://localhost:5173", 1, False
Else
    WshShell.Run "http://localhost:5173", 1, False
End If
