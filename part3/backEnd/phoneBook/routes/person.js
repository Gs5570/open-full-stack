const express = require('express');
const router = express.Router();
const PhoneBook = require('../models/phoneBook');
const errorHandler = require('../middleware/errorhandler');

router.get('/persons', async function (req, res, next) {
  try {
    const allEntries = await PhoneBook.find({});
    res.status(200).json(allEntries);
    console.log('All users fetched successfully');
  } catch (error) {
    next(new Error('No record exist')); // Throw custom error message
  }
});

router.get('/persons/:id', async function (req, res, next) {
  let reqID = req.params.id;

  try {
    const foundPhoneEntry = await PhoneBook.findById(reqID).exec();
    if (foundPhoneEntry) {
      res.status(200).json(foundPhoneEntry);
    }
  } catch (error) {
    next(new Error('Id does not exist')); // Throw custom error message
  }
});

router.delete('/persons/:id', async function (req, res, next) {
  let reqID = req.params.id;

  try {
    const deletedEntry = await PhoneBook.findByIdAndDelete(reqID);
    if (deletedEntry) {
      res.status(200).json('Deleted successfully');
    }
  } catch (error) {
    next(new Error('Cannot delete entry'));
  }
});

router.post('/persons', async function (req, res, next) {
  let body = req.body;

  try {
    const createPhoneEntry = new PhoneBook({
      name: req.body.name,
      number: req.body.number,
    });
    const result = await createPhoneEntry.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
});

router.patch('/persons', async function (req, res, next) {
  console.log(req.body.name);
  console.log(req.body.number);

  try {
    const findPhoneEntry = await PhoneBook.findOne({
      name: req.body.name,
    }).exec();
    console.log(findPhoneEntry);

    if (findPhoneEntry !== null) {
      const modifyPhonEntry = await PhoneBook.updateOne(
        { name: req.body.name },
        { number: req.body.number }
      );

      if (modifyPhonEntry) res.status(204).json('phone number changed');
    } else {
      next(new Error('user does not exist'));
    }
  } catch (error) {
    next(new Error('entry cannot be modified'));
  }
});

module.exports = router;
