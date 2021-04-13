// Utils
var utils = {};

utils.normalizeQueries = function (query){
	var fullQuery, queries;
	fullQuery = query.replace(/\n/g, ' ');
  fullQuery = fullQuery.replace(/\s+/g, ' ');
  queries = fullQuery.match(/((\w+?)[^;]*)/g);
  return queries;
}

utils.sortResult = function(rows){
	var output = [];
	if (Object.prototype.toString.call( rows ) === '[object Array]') {
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
	} else {
		return JSON.stringify(rows);
	}
}

module.exports = utils;