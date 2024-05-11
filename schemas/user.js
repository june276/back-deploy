import { Schema, model } from "mongoose";

const userSchema = new Schema({
	email: {
		type: String,
		require: true,
	},
	name: {
		type: String,
		require: true,
	},
	address: {
		type: String,
	},
	createAt: {
		type: String,
	},
	updateAt: {
		type: String,
	}
});

// model('객체명', 스키마, '컬렉션 테이블명');
export default model("User", userSchema, "users");