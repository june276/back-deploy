import mongoose from "mongoose";

const connect_url = `mongodb+srv://app:1234@app.retr5ep.mongodb.net/`;

const connect = () => {
	if(process.env.NODE_ENV !== 'production'){
		mongoose.set('debug', true);
	}

	mongoose.connect(connect_url, {
		dbName: 'project',
	})
	.then(()=>{
		console.log('Complete connecting to MongoDB')
	})
	.catch((err)=>{
		console.error('Fail to connect');
		console.log(err);
	})
}

export default connect;