import "./table.css";
import LegendBody from "./LegendBody";
import LegendHead from "./LegendHead";
import LegendFooter from "./LegendFooter";

export default function Legend() {
  return (
    <table id="periodontalTable">
      <LegendHead />
      <LegendBody />
      <LegendFooter />
    </table>
  );
}
