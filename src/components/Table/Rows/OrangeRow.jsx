import LabelCell from "../Cells/LabelCell";
import OrangeCell from "../Cells/OrangeCell";

export default function OrangeRow({ title }) {
  return (
    <tr>
      <LabelCell labelTitle={title} />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <td className="emptyColumn"></td>
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
      <OrangeCell />
    </tr>
  );
}
