import ToggleButton from "@mui/material/ToggleButton";
import * as React from "react";
import { styled } from "@mui/material/styles";

export default function PlaqueCell() {
  const [leftSelected, setLeftSelected] = React.useState(false);
  const [centerSelected, setCenterSelected] = React.useState(false);
  const [rightSelected, setRightSelected] = React.useState(false);

  const SToggleButton = styled(ToggleButton)({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: "#42a5f5",
    },
  });

  return (
    <td className="cell">
      <div className="checkboxCell">
        <SToggleButton
          value="check"
          selected={leftSelected}
          onChange={() => {
            setLeftSelected(!leftSelected);
          }}
        />
        <SToggleButton
          value="check"
          selected={centerSelected}
          onChange={() => {
            setCenterSelected(!centerSelected);
          }}
        />
        <SToggleButton
          value="check"
          selected={rightSelected}
          onChange={() => {
            setRightSelected(!rightSelected);
          }}
        />
      </div>
    </td>
  );
}
