import LabelCell from "../Cells/LabelCell";
import ToothNumberCell from "../Cells/ToothNumberCell";

export default function ToothDownRow() {
  return (
    <tr>
      <LabelCell />
      <ToothNumberCell toothNumber="48" />
      <ToothNumberCell toothNumber="47" />
      <ToothNumberCell toothNumber="46" />
      <ToothNumberCell toothNumber="45" />
      <ToothNumberCell toothNumber="44" />
      <ToothNumberCell toothNumber="43" />
      <ToothNumberCell toothNumber="42" />
      <ToothNumberCell toothNumber="41" />
      <td className="emptyColumn"></td>
      <ToothNumberCell toothNumber="31" />
      <ToothNumberCell toothNumber="32" />
      <ToothNumberCell toothNumber="33" />
      <ToothNumberCell toothNumber="34" />
      <ToothNumberCell toothNumber="35" />
      <ToothNumberCell toothNumber="36" />
      <ToothNumberCell toothNumber="37" />
      <ToothNumberCell toothNumber="38" />
    </tr>
  );
}
