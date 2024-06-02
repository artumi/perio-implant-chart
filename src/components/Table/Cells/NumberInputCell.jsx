import "../table.css";

export default function NumberInputCell() {
  function handleInputChange(event) {
    const { value } = event.target;
    if (value > 15) {
      event.target.value = 15;
    }
  }

  return (
    <td className="cell">
      <input
        className="numberField"
        type="text"
        pattern="\d*"
        maxLength="2"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={handleInputChange}
      />
      <input
        className="numberField"
        type="text"
        pattern="\d*"
        maxLength="2"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={handleInputChange}
      />
      <input
        className="numberField numberFieldRight"
        type="text"
        pattern="\d*"
        maxLength="2"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={handleInputChange}
      />
    </td>
  );
}
