import LabelCell from "../Cells/LabelCell";
import PlaqueCell from "../Cells/PlaqueCell";

export default function PurpleRow({ title }) {
  return (
    <tr>
      <LabelCell labelTitle={title} />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <td className="emptyColumn"></td>
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
      <PlaqueCell />
    </tr>
  );
}
