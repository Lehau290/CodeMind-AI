@echo off
title C++ Master AI - Khoi dong he thong
cls
echo ==========================================================
echo        C++ MASTER AI - NEN TANG HOC LAP TRINH C++
echo ==========================================================
echo.
echo  Ban muon khoi dong he thong theo cach nao?
echo.
echo  [1] Mo truc tiep giao dien Frontend bang trinh duyet (Khuyen dung - 1 Click)
echo  [2] Khoi dong Backend Java Web Server tren http://localhost:8080
echo  [3] Thoat
echo.
echo ==========================================================
set /p choice="Nhap lua chon cua ban [1, 2, 3]: "

if "%choice%"=="1" (
    echo Dang mo frontend/index.html tren trinh duyet...
    start "" "%~dp0frontend\index.html"
    exit
)

if "%choice%"=="2" (
    echo Dang khoi dong Backend Java Server...
    cd /d "%~dp0backend"
    start http://localhost:8080
    java Server.java
    pause
    exit
)

if "%choice%"=="3" (
    exit
)

echo Lua chon khong hop le. Dang mo Frontend mac dinh...
start "" "%~dp0frontend\index.html"
exit
