import "./table.css";
import NotesRow from "./Rows/NotesRow";
import InputRow from "./Rows/InputRow";
import CheckBoxRow from "./Rows/CheckBoxRow";
import NumberRow from "./Rows/NumberRow";
import ToothUpRow from "./Rows/ToothUpRow";

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
    </tbody>
  );
}
