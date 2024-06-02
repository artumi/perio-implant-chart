import "../table.css";

export default function InputCell({ title }) {
  return (
    <td className="cell">
      {title == "Surgery" ? (
        <input
          className="inputField surgery"
          spellCheck="false"
          autoComplete="off"
        />
      ) : (
        <input className="inputField" spellCheck="false" autoComplete="off" />
      )}
    </td>
  );
}
