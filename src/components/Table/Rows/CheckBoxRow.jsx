import LabelCell from "../Cells/LabelCell";
import CheckBoxCell from "../Cells/CheckBoxCell";

export default function CheckBoxRow({ title }) {
  return (
    <tr>
      <LabelCell labelTitle={title} />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <td className="emptyColumn"></td>
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
      <CheckBoxCell />
    </tr>
  );
}
