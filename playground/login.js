const getDB = require('./mongodb-connect');

const register = (data) => {
	getDB.then(db => {
		db.collection('Users').insertOne(data, (err, result) => {
			if (err) return Promise.reject();
		})
	});
}

exports.User = {
	register: register,
}