/**
 * component handles all the clicking events
 */
export default function Button({ text, handleClick }) {
  return (
    <div>
      <button type="button" onClick={() => handleClick()}>
        {text}
      </button>
    </div>
  );
}
