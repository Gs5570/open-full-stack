const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const phoneBookSchema = new Schema({
  name: String,
  number: String,
});

const PhoneBook = mongoose.model('PhoneBook', phoneBookSchema);
module.exports = PhoneBook;
