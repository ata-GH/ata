@echo off
echo "xcopy static to template"
echo.
xcopy C:\Users\GUOHAN\Desktop\vue2-backstage\backstage\backstage-index.html C:\Users\GUOHAN\Desktop\unicon-web\backstage\templates /c /y /h /r
xcopy C:\Users\GUOHAN\Desktop\vue2-backstage\backstage\static C:\Users\GUOHAN\Desktop\unicon-web\backstage\static /s /e /c /y /h /r
rmdir C:\Users\GUOHAN\Desktop\unicon-web\backstage\templates\static
erase C:\Users\GUOHAN\Desktop\vue2-backstage\backstage\static\js /Q
erase C:\Users\GUOHAN\Desktop\vue2-backstage\backstage\static\css C:\Users\GUOHAN\Desktop\vue2-backstage\backstage\static\images /Q
start C:\Users\GUOHAN\Desktop\unicon-web\backstage\templates
cd C:\Users\GUOHAN\Desktop\unicon-web\backstage\templates
: start "" "C:\Program Files\Git\git-bash.exe"
exit
