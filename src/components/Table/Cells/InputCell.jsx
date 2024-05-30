import "../table.css";

export default function InputCell() {
  return (
    <td className="cell">
      <input className="inputField" spellcheck="false" autocomplete="off" />
    </td>
  );
}
