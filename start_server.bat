@echo off
cd /d "%~dp0"
start http://localhost:8130
python -m http.server 8130

