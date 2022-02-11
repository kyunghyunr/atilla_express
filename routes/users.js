'use strict' // vanilla js

let express = require("express");
let router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
	res.send("hello world");
});

module.exports = router;
