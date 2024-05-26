import "./table.css";
import LegendBody from "./LegendBody";
import LegendHead from "./LegendHead";

export default function Legend() {
  return (
    <table id="periodontalTable">
      <LegendHead />
      <LegendBody />
    </table>
  );
}
