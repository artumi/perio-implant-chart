import "./table.css";
import LegendBody from "./LegendBody";
import LegendHead from "./LegendHead";
import LegendFooter from "./LegendFooter";
import LegendBodyMucosa from "./LegendBodyMucosa";

export default function Legend({ chartType }) {
  return (
    <table id="periodontalTable">
      <LegendHead />
      {chartType === "mucosa" ? <LegendBodyMucosa /> : <LegendBody />}
      <LegendFooter />
    </table>
  );
}
