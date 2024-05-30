import "../table.css";

export default function NotesCelln() {
  return (
    <td className="notesColumn">
      <textarea
        name="NotesText"
        className="notesText"
        cols="8"
        rows="3"
        spellCheck="false"
        autoCorrect="off"
        autoCapitalize="off"
      ></textarea>
    </td>
  );
}
