const nodemailer = require('nodemailer');
const email = {
	host: "smtp.mailtrap.io",
	port: 587,
	auth: {
		user: "37b0992d4efe08",
		pass: "667ab3a1f470cc"
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
	from: 'kyunghyunr@gmail.com',
	to : 'kyunghyunr@gmail.com',
	subject: '테스트이메일',
	text: 'nodemailer 테스트'
}

send(email_data);
