import "../table.css";

export default function NumberInputCell() {
  return (
    <td className="cell">
      <input className="numberField" />
      <input className="numberField" />
      <input className="numberField numberFieldRight" />
    </td>
  );
}
