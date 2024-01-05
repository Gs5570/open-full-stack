export default function DisplayPhoneBookEntries({ persons, searchResult }) {
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
            <p key={person.id}>
              {person.name}: {person.number}
            </p>
          );
        })
      )}
    </div>
  );
}
