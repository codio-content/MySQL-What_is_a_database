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
		"Select all the company_profiles records where company_name is equal to Lorem Ipsum Institute or Et LLP;",
		"SELECT * FROM company_profiles WHERE company_name = 'Lorem Ipsum Institute' OR company_name = 'Et LLP'"
	],
	[
		"Select only the id and phone_num attributes of the company_profiles table and get the records where the id is between 40 and 60",
		"SELECT id,phone_num FROM company_profiles WHERE id BETWEEN 40 AND 60"
	]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sql-1-8/sql-1-8.sql', "directory", tasks);
