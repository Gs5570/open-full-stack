/**
 * Simple application that mimic the implement of a phoneBook
 * user can add entry to the phone book by typing the "name" and "phone number"
 * user can filter through the phone Book
 */
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

//components
import PhoneBookForm from './components/phoneBookform';
import SearchFilter from './components/SearchFilter';
import DisplayPhoneBookEntries from './components/DisplayPhoneBookEntries';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState(''); //state for the name typed by the user
  const [phone, setPhone] = useState(''); // state for the number typed by the user
  const [filterData, setFilterData] = useState(''); // state for the entry that the user is searching

  useEffect(() => {
    getPersons();
  }, []);
  /**
   * fetch data from json server 'db.json files'
   */
  async function getPersons() {
    let response = await axios.get('http://localhost:3000/persons');

    let personsData = response.data;
    setPersons(personsData);
  }

  /**
   * handle input changed for the name
   */
  function handleOnchange(event) {
    let userInput = event.target.value;
    setNewName(userInput);
  }

  /**
   * handle input changed for number
   */
  function phoneHandleChange(event) {
    let phoneInput = event.target.value;
    setPhone(phoneInput);
  }

  /**
   * submit form Data and update the states persons after user add values to the phonebook
   */
  function handleSubmit(event) {
    event.preventDefault();

    const existingUser = persons.find((person) => person.name === newName);

    existingUser
      ? alert('user exist already')
      : setPersons((prevState) => {
          return [...prevState, { name: newName, number: phone }];
        });
  }

  /**
   * handle input changed for the name
   * @param event
   */
  function handleFilter(event) {
    let filter = event.target.value;
    console.log(filter);
    setFilterData(() => filter);
  }

  /**
   * perform the search for the value entered by the user to the persons state
   * @returns result : object that contains the corresponding matched value from the search.
   */
  function search() {
    const result = persons.find((person) => filterData === person.name);
    return result;
  }

  let searchResult = search();

  // console.log('search', search());
  return (
    <div className="app-container">
      <h2>Phonebook</h2>

      <PhoneBookForm
        handleOnchange={handleOnchange}
        phoneHandleChange={phoneHandleChange}
        handleSubmit={handleSubmit}
        persons={persons}
        phone={phone}
        newName={newName}
      />
      <SearchFilter handleFilter={handleFilter} />
      <DisplayPhoneBookEntries searchResult={searchResult} persons={persons} />
    </div>
  );
};

export default App;
