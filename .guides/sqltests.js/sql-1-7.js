var sqltest = require('./fw-sqltests.js');
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"Use the people database",
		"USE people"
	],
	[
		"Display the name column from the 'names' table." ,
		"SELECT name FROM names"
	],
	[
		"Display only 3 records of the city column from the basic_info table",
		"SELECT city FROM basic_info LIMIT 3"
	]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sql-1-7/sql-1-7.sql', "people", tasks);
