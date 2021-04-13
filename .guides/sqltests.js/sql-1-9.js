var sqltest = require('./fw-sqltests.js');
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"Use the 'directory' database",
		"USE directory"
	],
	[
		"Show all of the available tables",
		"SHOW TABLES"
	],
	[
		"Select all the records from the 'company_profiles' table where 'id' equals 27",
		"SELECT * FROM company_profiles WHERE id = 27"
	],
	[
		"Select the 'id' and 'phone_num' columns from the 'company_profiles' table and sort them by 'id' in ascending order",
		"SELECT id,phone_num FROM company_profiles ORDER BY id ASC"
	],
	[
		"Select the 'id' and 'company_name' columns from the 'company_profiles' table where 'id' is greater or equal to '40'. Limit the results by 5",
		"SELECT id,company_name FROM company_profiles WHERE id >= 40 LIMIT 5"
	]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sql-1-9/sql-1-9.sql', "directory", tasks);
