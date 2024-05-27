import "./table.css";
import NotesCell from "./NotesCell";
import InputCell from "./InputCell";
import CheckBoxCell from "./CheckBoxCell";
import LabelCell from "./LabelCell";
import ToothNumberCell from "./ToothNumberCell";
import PlaqueCell from "./PlaqueCell";
import RedCell from "./RedCell";
import OrangeCell from "./OrangeCell";
import NumberInputCell from "./NumberInputCell";

export default function LegendBody() {
  return (
    <tbody>
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
      <tr>
        <LabelCell labelTitle="Fixation" />
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
      <tr>
        <LabelCell labelTitle="L/W" />
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
      <tr>
        <LabelCell labelTitle="Surgery" />
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
      <tr>
        <LabelCell labelTitle="Mobility" />
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
      <tr>
        <LabelCell labelTitle="Plaque" />
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
      <tr>
        <LabelCell labelTitle="SOP" />
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
      <tr>
        <LabelCell labelTitle="BOP" />
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
      <tr>
        <LabelCell labelTitle="CBP" />
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
      <tr>
        <LabelCell labelTitle="BP" />
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
      <tr>
        <LabelCell labelTitle="PM" />
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
      <tr>
        <LabelCell labelTitle="PD" />
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
      <tr>
        <LabelCell labelTitle="PD" />
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
      <tr>
        <LabelCell labelTitle="PM" />
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
      <tr>
        <LabelCell labelTitle="BP" />
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
      <tr>
        <LabelCell labelTitle="CBP" />
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
      <tr>
        <LabelCell labelTitle="BOP" />
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
      <tr>
        <LabelCell labelTitle="SOP" />
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
      <tr>
        <LabelCell labelTitle="Plaque" />
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
    </tbody>
  );
}
