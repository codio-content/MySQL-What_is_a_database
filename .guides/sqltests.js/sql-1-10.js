var sqltest = require('./fw-sqltests.js');
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sql-1-10/sql-1-10.sql', "people", tasks);
