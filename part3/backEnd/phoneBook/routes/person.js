const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const personData = require('../public/data/personsData.json');
const personDataPath = path.join(__dirname, '../public/data/personsData.json');

/* GET users listing. */
router.get('/persons', function (req, res, next) {
  res.send(personData);
});

// step 3
router.get('/persons/:id', function (req, res, next) {
  let reqID = req.params.id;
  let personEntry = personData.findIndex((person) => {
    return person.id === Number(reqID);
  });

  if (personEntry) {
    res.send(JSON.stringify(personEntry));
  } else {
    res.send(`resource does not exist`).status(204);
  }
});
//step 4
router.delete('/persons/:id', function (req, res, next) {
  let reqID = req.params.id;
  const indexOfArr = personData.findIndex(
    (person) => person.id === Number(reqID)
  );
  if (indexOfArr !== -1) {
    personData.splice(indexOfArr, 1);
    // Write updated data back to file
    fs.writeFile(personDataPath, JSON.stringify(personData, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        res.send('Deleted successfully');
      }
    });
  } else {
    res.status(404).send(`Resource does not exist`);
  }
});

//step 5
router.post('/persons', function (req, res, next) {
  let body = req.body;
  console.log(body);

  let existingName = personData.find((person) => {
    return person.name == req.body.name;
  });

  let existingNumber = personData.find(
    (person) => person.number == req.body.number
  );

  console.log('existing number', existingNumber);
  console.log('exiting name', existingName);

  if (existingName) {
    res.status(409).send('user already exist');
  } else if (existingNumber) {
    res.status(409).send('phone number already exist');
  } else {
    // Generate new ID
    const newId = Math.max(...personData.map((person) => person.id)) + 1;
    body.id = newId;

    personData.push(body);

    // Write updated data back to file
    fs.writeFile(personDataPath, JSON.stringify(personData, null, 2), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
      } else {
        res.send('Created successfully');
      }
    });
  }
});

module.exports = router;
