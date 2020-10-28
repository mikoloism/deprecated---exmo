const MongoClient = require('mongodb').MongoClient;

// function init(db, table) {
// 	const _ = {};
// 	_.url = 'mongodb://localhost:27017';
// 	_.tableName = table;
// 	_.dbName = db;
// 	MongoClient.connect(_.url, { useUnifiedTopology: true }, function (
// 		err,
// 		client,
// 	) {
// 		if (err) throw err;
// 		_.db = client.db(_.dbName);
// 		_.table = client.db(_.dbName).collection(_.tableName);
// 		client.close();
// 	});

// 	return _; // should be `_.table` as `client.db(...).collection(...);`
// }

const _ = {};
_.url = 'mongodb://localhost:27017';
module.exports = (dbName = 'db_news') => (tableName = 'users') =>
	MongoClient.connect(_.url, { useUnifiedTopology: true }, function (
		err,
		client,
	) {
		if (err) throw err;

		_.dbName = dbName;
		_.tableName = tableName;
		_.db = client.db(_.dbName);
		_.table = client.db(_.dbName).collection(_.tableName);
		const find = _.table.find().forEach((i) => console.log(i));
		client.close();
	});
