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
      </tr>
      <tr>
        <LabelCell labelTitle="Length/Width" />
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
      </tr>
    </tbody>
  );
}
