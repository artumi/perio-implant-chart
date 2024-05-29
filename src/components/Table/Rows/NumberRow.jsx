import LabelCell from "../Cells/LabelCell";
import NumberInputCell from "../Cells/NumberInputCell";

export default function NumberRow({ title }) {
  return (
    <tr>
      <LabelCell labelTitle={title} />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <td className="emptyColumn"></td>
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
      <NumberInputCell />
    </tr>
  );
}
