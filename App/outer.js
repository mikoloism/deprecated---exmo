const MongoClient = require('mongodb').MongoClient;

function init(db, table) {
	const _ = {};
	_.url = 'mongodb://localhost:27017';
	_.tableName = table;
	_.dbName = db;
	MongoClient.connect(_.url, { useUnifiedTopology: true }, function (
		err,
		client,
	) {
		if (err) throw err;
		_.db = client.db(_.dbName);
		_.table = client.db(_.dbName).collection(_.tableName);
		client.close();
	});

	return _; // should be `_.table` as `client.db(...).collection(...);`
}

module.exports = (db_name) => {
	init = init.bind(init, db_name);
	return init;
};
