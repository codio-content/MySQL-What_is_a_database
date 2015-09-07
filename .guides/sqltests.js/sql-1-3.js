var sqltest = require("./sqltests-fw.js");
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"Use the 'people' database", 
		"USE people"
	],
	[
		"Select the 'email' column from the 'basic_info' table where 'email' equals 'sed.pede@nisi.com'", 
		"SELECT email FROM basic_info WHERE email='sed.pede@nisi.com'"
	]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sqlchallenges/sql-1-3.sql', "people", tasks);
