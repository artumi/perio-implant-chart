import LabelCell from "../Cells/LabelCell";
import ToothNumberCell from "../Cells/ToothNumberCell";

export default function ToothUpRow() {
  return (
    <tr>
      <LabelCell />
      <ToothNumberCell toothNumber="18" />
      <ToothNumberCell toothNumber="17" />
      <ToothNumberCell toothNumber="16" />
      <ToothNumberCell toothNumber="15" />
      <ToothNumberCell toothNumber="14" />
      <ToothNumberCell toothNumber="13" />
      <ToothNumberCell toothNumber="12" />
      <ToothNumberCell toothNumber="11" />
      <td className="emptyColumn"></td>
      <ToothNumberCell toothNumber="21" />
      <ToothNumberCell toothNumber="22" />
      <ToothNumberCell toothNumber="23" />
      <ToothNumberCell toothNumber="24" />
      <ToothNumberCell toothNumber="25" />
      <ToothNumberCell toothNumber="26" />
      <ToothNumberCell toothNumber="27" />
      <ToothNumberCell toothNumber="28" />
    </tr>
  );
}
