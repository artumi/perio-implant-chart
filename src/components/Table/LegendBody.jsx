import "./table.css";
import DividerRow from "./Rows/DividerRow";
import NotesRow from "./Rows/NotesRow";
import InputRow from "./Rows/InputRow";
import CheckBoxRow from "./Rows/CheckBoxRow";
import PurpleRow from "./Rows/PurpleRow";
import OrangeRow from "./Rows/OrangeRow";
import RedRow from "./Rows/RedRow";
import NumberRow from "./Rows/NumberRow";
import ToothUpRow from "./Rows/ToothUpRow";
import ToothDownRow from "./Rows/ToothDownRow";

export default function LegendBody() {
  return (
    <tbody>
      <NotesRow />
      <InputRow title="Fixation" />
      <InputRow title="L/W" />
      <InputRow title="Surgery" />
      <CheckBoxRow title="Mobility" />
      <PurpleRow title="Plaque" />
      <OrangeRow title="SOP" />
      <RedRow title="BOP" />
      <NumberRow title="CBP" />
      <NumberRow title="BP" />
      <NumberRow title="PM" />
      <NumberRow title="PD" />
      <ToothUpRow />
      <NumberRow title="PD" />
      <NumberRow title="PM" />
      <NumberRow title="BP" />
      <NumberRow title="CBP" />
      <RedRow title="BOP" />
      <OrangeRow title="SOP" />
      <PurpleRow title="Plaque" />
      <DividerRow />
      <PurpleRow title="Plaque" />
      <OrangeRow title="SOP" />
      <RedRow title="BOP" />
      <NumberRow title="CBP" />
      <NumberRow title="BP" />
      <NumberRow title="PM" />
      <NumberRow title="PD" />
      <ToothDownRow />
      <NumberRow title="PD" />
      <NumberRow title="PM" />
      <NumberRow title="BP" />
      <NumberRow title="CBP" />
      <RedRow title="BOP" />
      <OrangeRow title="SOP" />
      <PurpleRow title="Plaque" />
      <CheckBoxRow title="Mobility" />
      <InputRow title="Surgery" />
      <InputRow title="L/W" />
      <InputRow title="Fixation" />
      <NotesRow />
    </tbody>
  );
}
