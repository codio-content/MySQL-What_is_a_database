/*
	Challenges framework
	Expect a result from the database and compare it as a JSON string
*/
var mysql = require('mysql');
var fs = require('fs');
var errorLogs = require('./errorLogs.js');
var connection;
var globalCount = 0;
var queryTypes = {};

var sqltest = {};
sqltest.workspaceDirectory = '~/workspace/';
sqltest.sqlDir = sqltests.workspaceDirectory + '.guides/sqltests.js/';

// Utils
function normalizeQueries(query){
	var fullQuery, queries;
	fullQuery = query.replace(/\n/g, ' ');
  fullQuery = fullQuery.replace(/\s+/g, ' ');
  queries = fullQuery.match(/((\w+?)[^;]*)/g);
  return queries;
}

function sortResult(rows){
	var output = [];
	rows.forEach(function(item, index, array){
		var obj = {};
		Object.keys(item).sort().forEach(function(itm, indx) {
			if (Object.keys(obj).length <= Object.keys(item).length) {
				obj[itm] = item[itm];
			}
		});
		output.push(obj);
	});
	return output = JSON.stringify(output);
}

// Init process:
function readChallengeFile(srcFile, tasks){
	var srcFile = sqltest.sqlDir + srcFile;
	return new Promise(function(resolve, reject){
		fs.readFile(srcFile, 'utf-8', function (err, data) {
		  if (err) {
		  	errorLogs.readChallengeFile('srcFile', srcFile);
		  };
		  var queries = normalizeQueries(data);
		  // Number of tasks equal number of user queries:
		  if (queries.length != tasks.length) {
		  	errorLogs.readChallengeFile('length', tasks, queries);
		  } else {
		  	resolve(queries);
		  }
		});
	});
}

function connectTo(dbName) {
	connection = mysql.createConnection({
	  host     : 'localhost',
	  user     : 'root',
	  password : 'N3tp0ePl@n',
	  database : dbName
	});
	connection.connect();
}

function queryDatabaseByType(db, query){
	var query = normalizeQueries(query);
	return new Promise(function(resolve, reject){
		connectTo(db);
		switch (true) {
			case (/^SELECT/gi.test(query)):
				connection.query(query, function(err, rows, fields) {
				  if (err) {
				  	errorLogs.queryDatabaseByType(globalCount);
				  } else {
				  	var output = sortResult(rows);
				  	resolve(output);
				  }
				});
				break;
			default:
				console.log('Query matches no DDL keyword');
				process.exit(1);
		}
		connection.end();
	});
}

function dbLookup(dbName, tasks, userQueriesArr){
	var expectedQuery;
	var userQuery;
	var task = tasks[globalCount][0];
	var query = tasks[globalCount][1];
	globalCount++;
	queryDatabaseByType(dbName, query).then(function(expectedQuery){
		expectedQuery = expectedQuery;
		var query = userQueriesArr[globalCount-1];
		queryDatabaseByType(dbName, query).then(function(userQuery){
			userQuery = userQuery;
			if (expectedQuery == userQuery) {
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
		});
	}).catch(function(){
		console.log('Fail to retrieve expectedQueries from db.');
	});
}

sqltest.testCommands = function(srcFile, dbName, tasks){
	readChallengeFile(srcFile, tasks).then(function(userQueriesArr){
		dbLookup(dbName, tasks, userQueriesArr);
	}).catch(function(){
		console.log('Fail to retrieve queries from ' + srcFile + ' file.');
	});
};

module.exports = sqltest;