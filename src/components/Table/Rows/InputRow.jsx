import LabelCell from "../Cells/LabelCell";
import InputCell from "../Cells/InputCell";

export default function InputRow({ title }) {
  return (
    <tr>
      <LabelCell labelTitle={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <td className="emptyColumn"></td>
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
      <InputCell title={title} />
    </tr>
  );
}
