export default function Statistics({ text, type }) {
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{type}</td>
        </tr>
      </tbody>
    </table>
  );
}
