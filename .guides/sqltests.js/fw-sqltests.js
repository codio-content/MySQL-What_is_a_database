/*
	SQL Challenges framework
	Version: 1.1 as of SQL2
	Expect a result from the database and compare it as a JSON string
*/
var mysql = require('mysql');
var fs = require('fs');
var errorLogs = require('./fw-errorLogs.js');
var Utils = require('./fw-utils.js');
var connection;
var globalCount = 0;
var globalDbName = '';
var queryTypes = {};
var expectedQuery;
var placeholder = '';

var sqltest = {};
sqltest.workspaceDirectory = '/home/codio/workspace/';
sqltest.sqlDir = sqltest.workspaceDirectory + '.guides/sqltests.js/';
// sqltest.workspaceDirectory = '/Volumes/Seagate Backup Plus Drive/htdocs/MySQL/CodioSQL.Units/sql2/';
// sqltest.sqlDir = sqltest.workspaceDirectory + '.guides/sqltests.js/';

// Init process:
function readChallengeFile(srcFile, tasks){
	var srcFile = sqltest.workspaceDirectory + srcFile;
	return new Promise(function(resolve, reject){
		fs.readFile(srcFile, 'utf-8', function (err, data) {
		  if (err) {
		  	errorLogs.readChallengeFile('srcFile', srcFile);
		  };
		  if (data.length) {
			  var queries = Utils.normalizeQueries(data);
			  // Number of tasks equal number of user queries:
			  if (queries.length != tasks.length) {
			  	errorLogs.readChallengeFile('length', srcFile, tasks, queries);
			  } else {
			  	resolve(queries);
			  }
		  } else {
		  	errorLogs.readChallengeFile('empty', srcFile);
		  }
		});
	});
	errorLogs.readChallengeFile('empty', srcFile);
}

function connectTo(dbName) {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : '',
	  // user     : 'root',
	  // password : 'N3tp0ePl@n',
	  database : dbName
	});
	connection.connect();
}

function queryDatabaseByType(query){
	var query = Utils.normalizeQueries(query)[0];
	var output;
	return new Promise(function(resolve, reject){
		connectTo(globalDbName);
		connection.query(query, function(err, rows, fields) {
		  if (err) {
		  	switch (true) {
		  		case (err['code'] === 'ER_TABLE_EXISTS_ERROR'):
				  		if (query.split(' ')[2] === placeholder) {
					  		output = Utils.sortResult(err);
					  		resolve(output);
				  		} else {
				  			errorLogs.queryDatabaseByType(globalCount);
				  		}
		  			break;
		  		default:
				  	output = Utils.sortResult(err);
			  		resolve(output);
		  	}
		  } else {
		  	if (rows.insertId) {
		  		rows.insertId = 1;
		  	}
	  		output = Utils.sortResult(rows);
	  		resolve(output);
		  }
		});
		connection.end();
	});
}

function dbLookup(dbName, tasks, userQueriesArr){
	var userQuery;
	var task = tasks[globalCount][0];
	var query = tasks[globalCount][1];
	expectedQuery = query;
	globalCount++;
	queryDatabaseByType(query).then(function(expected){
		var query = userQueriesArr[globalCount-1];
		queryDatabaseByType(query).then(function(userQuery){
			userQuery = userQuery;
			// console.log('expected: ' + expected);
			// console.log('user: ' + userQuery);
			if (expected == userQuery) {
				if (globalCount < tasks.length) {
					dbLookup(dbName, tasks, userQueriesArr);
				} else {
					console.log('Well done!');
					process.exit(0);
				}
			} else {
				errorLogs.queryMismatch(globalCount, task);
			}
		}).catch(function(){
			console.log('Failed to retrieve userQueries from db');
			process.exit(1);
		});
	}).catch(function(){
		console.log('Fail to retrieve expectedQueries from db.');
		process.exit(1);
	});
}

sqltest.testCommands = function(srcFile, dbName, tasks, pholder){
	globalDbName = dbName;
	placeholder = pholder ? pholder : '';
	readChallengeFile(srcFile, tasks).then(function(userQueriesArr){
		dbLookup(dbName, tasks, userQueriesArr);
	}).catch(function(){
		errorLogs.readChallengeFile('srcFile', srcFile);
	});
};

module.exports = sqltest;