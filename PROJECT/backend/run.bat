@echo off
cd /d "%~dp0"
echo Starting AgriSahayak Backend...
mvn org.springframework.boot:spring-boot-maven-plugin:3.5.5:run
pause
