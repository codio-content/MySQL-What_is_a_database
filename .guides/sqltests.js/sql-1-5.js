var sqltest = require('./fw-sqltests.js');
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"Switch to the directory database",
		"USE directory"
	],
	[
		"Display the available tables of the directory database",
		"SHOW TABLES"
	],
	[
		"Query all the records from the company_profiles table",
		"SELECT * FROM company_profiles"
	]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sql-1-5/sql-1-5.sql', "directory", tasks);
