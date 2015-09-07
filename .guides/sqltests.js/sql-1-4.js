var sqltest = require("./sqltests-fw.js");
var workspace = sqltest.workspaceDirectory;


/*
 Challenge tasks
 tasks[{Task description | Expected Query}]
*/
var tasks = [
	[
		"Get all records from the 'basic_info' table where 'birthday' is less or equal than '2016' and 'id' is between 1 and 5. Sort results by 'id' in descending order.",
		"SELECT * FROM basic_info WHERE birthday <= 2016 AND id BETWEEN 1 AND 5 ORDER BY id DESC"
	]
];


/*
 Init test
 sql.testCommands(user source file, database name, tasks array)
*/
sqltest.testCommands('sqlchallenges/sql-1-4.sql', "people", tasks);
