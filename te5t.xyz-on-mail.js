const nodemailer = require('nodemailer');
const email = {
	host: "smtp.gmail.com",
	port: 587,
	auth: {
		user: "music.atilla@gmail.com",
		pass: "pfzlipdndkzhgsru"
	}
};

const send = async (option) => {
	nodemailer.createTransport(email).sendMail(option, (error, info) => {
		if(error) {
			console.log(error);
		} else {
			console.log(info);
			return info.response;
		}
	});
};

let email_data = {
	from: 'te5t@te5t.xyz',
	to : 'music.atilla@gmail.com',
	subject: 'te5t@te5t.xyz is running',
	text: 'te5t@te5t.xyz is running'
}

send(email_data);
