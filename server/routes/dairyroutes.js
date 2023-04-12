const express = require('express');
const { getdairy,enterdairy } = require('../contollers/dairycomtroller');
const dairyroute = express.Router();

dairyroute.post('/getdiary',getdairy);
dairyroute.post('/addnewdairy',enterdairy);

module.exports = dairyroute;