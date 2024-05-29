import LabelCell from "../Cells/LabelCell";
import RedCell from "../Cells/RedCell";

export default function RedRow({ title }) {
  return (
    <tr>
      <LabelCell labelTitle={title} />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <td className="emptyColumn"></td>
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
      <RedCell />
    </tr>
  );
}
