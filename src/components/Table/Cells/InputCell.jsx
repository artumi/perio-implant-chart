import "../table.css";

export default function InputCell() {
  return (
    <td className="cell">
      <input className="inputField" spellCheck="false" autoComplete="off" />
    </td>
  );
}
