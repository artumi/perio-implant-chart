import "./table.css";
import NotesRow from "./Rows/NotesRow";
import InputRow from "./Rows/InputRow";
import CheckBoxRow from "./Rows/CheckBoxRow";
import NumberRow from "./Rows/NumberRow";
import ToothUpRow from "./Rows/ToothUpRow";
import DividerRow from "./Rows/DividerRow";
import ToothDownRow from "./Rows/ToothDownRow";

export default function LegendBodyMucosa() {
  return (
    <tbody>
      <NotesRow />
      <InputRow title="Fixation" />
      <CheckBoxRow title="PMC" />
      <CheckBoxRow title="STM" />
      <NumberRow title="MT" />
      <NumberRow title="KMW" />
      <NumberRow title="STH" />
      <ToothUpRow />
      <NumberRow title="STH" />
      <NumberRow title="KMW" />
      <NumberRow title="MT" />
      <CheckBoxRow title="STM" />
      <CheckBoxRow title="PMC" />
      <DividerRow />
      <CheckBoxRow title="PMC" />
      <CheckBoxRow title="STM" />
      <NumberRow title="MT" />
      <NumberRow title="KMW" />
      <NumberRow title="STH" />
      <ToothDownRow />
      <NumberRow title="STH" />
      <NumberRow title="KMW" />
      <NumberRow title="MT" />
      <CheckBoxRow title="STM" />
      <CheckBoxRow title="PMC" />
      <InputRow title="Fixation" />
      <NotesRow />
    </tbody>
  );
}
