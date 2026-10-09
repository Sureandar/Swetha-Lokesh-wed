@echo off
echo ===================================================
echo   Wedding AI Invitation - Ch Swetha & C Lokesh
echo   Date: October 21, 2026
echo   Venue: Vishnu Mahal, Minjur, Chennai
echo   Local Address: http://localhost:8000
echo ===================================================
echo.
echo Launching your browser...
start "" "http://localhost:8000"
echo.
echo Starting Python HTTP server on port 8000...
echo (Press Ctrl+C in this window to stop the server)
python -m http.server 8000
