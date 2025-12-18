@echo off
setlocal

set "CUR_DIR=%CD%"

for %%I in ("%CUR_DIR%") do set "FOLDER_NAME=%%~nxI"

set "TARGET_DIR=%APPDATA%\Minecraft Bedrock\Users\Shared\games\com.mojang\development_behavior_packs\%FOLDER_NAME%"

mklink /D "%TARGET_DIR%" "%CUR_DIR%"

pause
