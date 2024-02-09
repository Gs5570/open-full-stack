export default function PhoneBookForm({
  handleOnchange,
  phoneHandleChange,
  handleSubmit,
  persons,
  newName,
  phone,
}) {
  return (
    <div>
      <h3>Add entry to phone book</h3>
      <form>
        <div className="inputs-container">
          <label>
            name:{' '}
            <input
              placeholder={'enter name'}
              value={newName}
              onChange={(event) => {
                handleOnchange(event);
              }}
            />
          </label>

          <label>
            phone number:{' '}
            <input
              placeholder={'0-0-0-0'}
              value={phone}
              onChange={(event) => {
                phoneHandleChange(event);
              }}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
            onClick={(event) => {
              handleSubmit(event);
            }}
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
}
