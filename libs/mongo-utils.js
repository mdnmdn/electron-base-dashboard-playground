const { MongoClient } = require('mongodb');

const mongoUrl = "mongodb://localhost:27017/finder";

let __db = null;

const connect = async () => {
	if (!__db) {
		const client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true });
		__db = client.db();
	}
	return __db;
}

const query = async (collection, filter = {}) => {
	const db = await connect();
	const result = await db.collection(collection).find(filter);
	return result;
}

const count = async (collection, filter = {}) => {
	const db = await connect();
	const result = await db.collection(collection).find(filter).count();
	return result;
}

const performOp = async (dbOperation) => {
	console.log('==> request performOp', dbOperation)
	const db = await connect();
	const result = await dbOperation(db);
	return result;
}

/*
(async () => {
	try { 
		const val = await performOp(db => db.collection('devices').find({}).count());
		console.log('count',val);
	
	} catch(err){
		console.warn(err);
	}
	process.exit();
})();
*/
exports.query = query;
exports.performOp = performOp;
exports.count = count;

