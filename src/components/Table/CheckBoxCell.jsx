import "./table.css";
import Checkbox from "@mui/material/Checkbox";
import Add from "@mui/icons-material/Add";
import Remove from "@mui/icons-material/Remove";
import { red } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function CheckBoxCell() {
  return (
    <td className="cell">
      <div className="checkboxCell">
        <Checkbox
          {...label}
          icon={<Remove />}
          checkedIcon={<Add />}
          sx={{
            color: grey[500],
            "&.Mui-checked": {
              color: red[600],
            },
          }}
        />
      </div>
    </td>
  );
}
