@echo off
echo Stopping Cozy Farm game server...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173') do (
    if not "%%a"=="0" taskkill /F /PID %%a >nul 2>&1
)
echo Done! Game server is stopped.
pause
