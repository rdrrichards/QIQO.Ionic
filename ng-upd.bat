CALL git commit -am "pre update commit"
CALL ng update @angular/core --force
CALL git add .
CALL git commit -am "ng update to latest"
CALL ng update @angular/cli@10.0.2 --force
CALL git add .
CALL git commit -am "cli update to latest"
CALL ng update @angular-devkit/architect
CALL git commit -am "angular-devkit/architect update to latest"
CALL npm audit fix
CALL git commit -am "post update commit"
CALL bt.bat

