const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
	if (err) throw err;
	module.exports = (tableName) => {
		return tableName;
		// const dbName = 'db_news';
		// const $this = {};
		// $this.connection = client;
		// $this.dbName = dbName;
		// $this.db = client.db($this.dbName);
		// $this.tableName = tableName;
		// $this.table = client.db($this.dbName).collection($this.tableName);
	};
});
