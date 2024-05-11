import connect from "./connect/connect.js"
import User from "./schemas/user.js"

connect();

const user_inserted = await User.create(
	{
		email: 'asdf1234@gmail.com',
		name: "이순신",
	},
	{
		email: 'hgd890@gmail.com',
		name: "홍길동",
	},
	{
		email: 'jbgjbg@gmail.com',
		name: "장보고",
	},
)