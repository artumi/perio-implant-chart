import LabelCell from "../Cells/LabelCell";
import NotesCell from "../Cells/NotesCell";

export default function NotesRow() {
  return (
    <tr>
      <LabelCell labelTitle="Notes" />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <td className="emptyColumn"></td>
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
      <NotesCell />
    </tr>
  );
}
