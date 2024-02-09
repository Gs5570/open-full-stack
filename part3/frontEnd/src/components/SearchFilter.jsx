export default function SearchFilter({ handleFilter }) {
  return (
    <div>
      <h3>Search</h3>
      <label>
        name:{' '}
        <input
          placeholder="enter name"
          onChange={(event) => {
            handleFilter(event);
          }}
        />
      </label>
    </div>
  );
}
