import phoneBookService from '../service/phoneBookService';
export default function DisplayPhoneBookEntries({
  persons,
  searchResult,
  setPersons,
}) {
  function phoneBookEntryDelete(itemID) {
    const response = phoneBookService.deleteNumber(itemID);
    response.then((response) => console.log(response.data));
    response.catch((error) => console.log(error));

    if (window.confirm('Do you really want to delete it?')) {
      // window.open('exit.html', 'Thanks for Visiting!');
      location.reload();
    }
    console.log(persons);
    console.log(itemID);
  }
  return (
    <div>
      <h2>Numbers</h2>

      <p>{}</p>

      {searchResult ? (
        <p>
          {searchResult.name}: {searchResult.number}
        </p>
      ) : (
        persons.map((person) => {
          return (
            <div className="phone-record" key={person.id}>
              <p>{person.name}:</p>
              <p>{person.number}</p>
              <button onClick={() => phoneBookEntryDelete(person.id)}>
                delete
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}
