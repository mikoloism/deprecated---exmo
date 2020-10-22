const MongoClient = require('mongodb').MongoClient;

class ExMo {
	constructor(db) {
		this.dbName = db;
		this.url = `mongodb://localhost:27017/`;
		this.bound = this.bound.bind(this);
		return this.bound();
	}
	bound() {
		this.init = this.init.bind(this);
		return this.init;
	}

	init(table) {
		this.tableName = table;
		const connect = (err, connection) => {
			if (err) throw err;
			this.db = connection.db(this.dbName);
			this.table = this.db.collection(this.tableName);
			connection.close();
		};
		MongoClient.connect(this.url, { useUnifiedTopology: true }, connect);
		return this; // should be `this.table` as `connection.db(...).collection(...);`
	}
}

module.exports = (db_name) => {
	return new ExMo(db_name);
};
