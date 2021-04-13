var sqltest = require('./fw-sqltests.js');
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
  [
		"Use the directory database",
		"USE directory"
	],
	[
		"Select all the records from the company_profiles table and limit them to 5 rows only",
		"SELECT * FROM company_profiles LIMIT 5"
	],
	[
		"Select only the id and the company_name columns from the company_profiles table and sort them by id in descending order",
		"SELECT id,company_name FROM company_profiles ORDER BY id DESC"
	]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sql-1-6/sql-1-6.sql', "directory", tasks);
