/*
	Challenges framework
	Expect a result from the database and compare it as a JSON string
*/
var mysql = require('mysql');
var fs = require('fs');
// var Promise = require('bluebird');
var errorLogs = require('./errorLogs.js');
var connection;
var globalCount = 0;
var globalDbName = '';
var queryTypes = {};

var sqltest = {};
sqltest.workspaceDirectory = '/home/codio/workspace/';
sqltest.sqlDir = sqltest.workspaceDirectory + '.guides/sqltests.js/';
// sqltest.workspaceDirectory = '/Volumes/Seagate Backup Plus Drive/htdocs/MySQL/CodioSQL.Units/sql1/';
// sqltest.sqlDir = sqltest.workspaceDirectory + '.guides/sqltests.js/';

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

RegExp.quote = function(str) {
  return (str+'').replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
};

function simulateQuery(query, callback){
	var q = query;
	var result = 'Query matches.';
	var USEpattern = '^USE\s+'+globalDbName;
	var USEregex = new RegExp(RegExp.quote(USEpattern), 'gi');
	switch (true) {
		case (/^SHOW\s+DATABASES/i.test(q)):
			callback(false, result);
			break;
		case (/^SHOW\s+TABLES/i.test(q)):
			callback(false, result);
			break;
		case (/^USE\s+/i.test(q)):
			callback(false, result);
			break;
		// case (USEregex.test(q)):
		// 	callback(false, result);
		// 	break;
		default:
			callback(true);
	}
}

// Init process:
function readChallengeFile(srcFile, tasks){
	var srcFile = sqltest.workspaceDirectory + srcFile;
	return new Promise(function(resolve, reject){
		fs.readFile(srcFile, 'utf-8', function (err, data) {
		  if (err) {
		  	errorLogs.readChallengeFile('srcFile', srcFile);
		  };
		  if (data.length) {
			  var queries = normalizeQueries(data);
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
	  database : dbName
	});
	connection.connect();
}

function queryDatabaseByType(db, query){
	var query = normalizeQueries(query)[0];
	return new Promise(function(resolve, reject){
		connectTo(db);
		switch (true) {
			case (/^SHOW/gi.test(query)):
				simulateQuery(query, function(err, result){
					if (err) {
						errorLogs.queryDatabaseByType(globalCount);
					} else {
				  	resolve(result);
					}
				});
				break;
			case (/^USE/gi.test(query)):
				simulateQuery(query, function(err, result){
					if (err) {
						errorLogs.queryDatabaseByType(globalCount);
					} else {
				  	resolve(result);
					}
				});
				break;
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
				errorLogs.unknownQuery(globalCount);
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
	globalDbName = dbName;
	readChallengeFile(srcFile, tasks).then(function(userQueriesArr){
		dbLookup(dbName, tasks, userQueriesArr);
	}).catch(function(){
		errorLogs.readChallengeFile('srcFile', srcFile);
	});
};

module.exports = sqltest;