import axios from 'axios';

const baseURl = '/api/persons';

const getNumber = async () => {
  let response = await axios.get(baseURl);
  return response;
};

const addNumber = async (typedPhoneRecord) => {
  let response = await axios.post(baseURl, typedPhoneRecord);
  return response;
};

const deleteNumber = async (itemID) => {
  let response = await axios.delete(`${baseURl}/${itemID}`);
  return response;
};

const changeNumber = async (itemID, editPhoneEntry) => {
  let response = await axios.put(`${baseURl}/${itemID}`, editPhoneEntry);
  return response;
};
export default { getNumber, addNumber, deleteNumber, changeNumber };
