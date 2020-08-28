const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/login-node';

mongoose.set('useFindAndModify', false);
mongoose
	.connect(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((db) => console.log('DB is connected'))
	.catch((err) => console.log(err));
