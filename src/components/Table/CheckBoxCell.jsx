import "./table.css";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CheckBoxCell() {
  return (
    <td className="cell">
      <div className="checkboxCell">
        <Checkbox {...label} color="secondary" />
      </div>
    </td>
  );
}
