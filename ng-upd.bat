CALL git commit -am "pre update commit"
CALL ng update @angular/core@12 --force
CALL git add .
CALL git commit -am "ng update to latest"
CALL ng update @angular/cli@12 --force
CALL git add .
CALL git commit -am "cli update to latest"
REM CALL ng update @angular-devkit/architect
REM CALL git commit -am "angular-devkit/architect update to latest"
CALL npm audit fix
CALL git commit -am "post update commit"
CALL bt.bat

