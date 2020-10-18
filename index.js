const [App, Database, Table, Field, Row] = [
	require('./App'),
	require('./Database'),
	require('./Table'),
	require('./Field'),
	require('./Row'),
];

module.exports = { App, DB: Database, Table, Field, Row };
