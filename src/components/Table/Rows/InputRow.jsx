import LabelCell from "../Cells/LabelCell";
import InputCell from "../Cells/InputCell";

export default function InputRow({ title }) {
  return (
    <tr>
      <LabelCell labelTitle={title} />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <td className="emptyColumn"></td>
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
      <InputCell />
    </tr>
  );
}
