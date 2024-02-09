const express = require('express');
const router = express.Router();

const personData = require('../public/data/personsData.json');
// console.log(personData);

let phoneEntries = personData.length;

const dateObj = new Date();
let date = dateObj.toDateString();
let time = dateObj.toTimeString();
let dateTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log('time zone', dateTimeZone);
// console.log('time', date);
// console.log('date', time);

// console.log(phoneEntries);
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send(
    `<p>The phone book has info for ${phoneEntries} people</p> <br/> ${date} ${time} ${dateTimeZone}`
  );
});

module.exports = router;
