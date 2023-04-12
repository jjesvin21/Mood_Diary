const  express = require('express');
const { addnewuser,login,authenticate, finduseres} = require('../contollers/usercontroller');
const userroute = express.Router();


userroute.post('/addnewuser',addnewuser);

userroute.post('/login',login);

userroute.post('/authenticate',authenticate);

module.exports = userroute;