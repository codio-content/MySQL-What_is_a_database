var sqltest = require('./fw-sqltests.js');
var workspace = sqltest.workspaceDirectory;

/*
	Challenge tasks
	tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"Display all the available databases",
		"SHOW DATABASES"
	],
	[
		"Change the database to be 'people'",
		"USE people"
	],
	[
		"Display the 'people' database tables",
		"SHOW TABLES"
	],
	[
		"Select all the records from the basic_info table",
		"SELECT * FROM basic_info"
	]
];

/*
	Init test
	sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sql-1-1/sql-1-1.sql', 'people', tasks);
