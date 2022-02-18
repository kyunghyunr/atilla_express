'use strict'; // vanilla js 

let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let nodemailer = require("nodemailer");

let homeRouter = require("./routes/home");
let musicRouter = require("./routes/music");
let contactRouter = require("./routes/contact");
// var usersRouter = require("./routes/users");

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", homeRouter);
app.use("/MUSIC", musicRouter);
app.use("/CONTACT", contactRouter);
// app.use("/users", usersRouter);

// mail-connect 
app.post('/', (req,res) => {
	console.log(req.body);
	const transporter = nodemailer.createTransport({
		host : 'smtp.mailtrap.io',
		port : 587,
		auth: {
			user: '37b0992d4efe08',
			pass: '667ab3a1f470cc'
		}			
	});
	const mailOptions = {
		from: req.body.email,
		to: 'atilla.music@gmail.com',
		subject: `Message from ${req.body.email}: ${req.body.subject}`,
		text: req.body.message
	}
	transporter.sendMail(mailOptions, (error, info) => {
		if(error) {
			console.log(error);
			res.send('error');
		} else {
			console.log('Email sent: ' + info.response);
			res.send('success');
		}
	});
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

module.exports = app;
