import "./table.css";

export default function NotesCelln() {
  return (
    <td className="notesColumn">
      <textarea name="NotesText" cols="8" rows="3"></textarea>
    </td>
  );
}