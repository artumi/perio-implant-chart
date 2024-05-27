import ToggleButton from "@mui/material/ToggleButton";
import * as React from "react";
import { styled } from "@mui/material/styles";

export default function OrangeCell() {
  const [Selected, setSelected] = React.useState(false);

  const SToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#ff5722",
    },
  });

  return (
    <td className="cell">
      <div className="checkboxCell">
        <SToggleButton
          value="check"
          fullWidth="true"
          selected={Selected}
          onChange={() => {
            setSelected(!Selected);
          }}
        />
      </div>
    </td>
  );
}
