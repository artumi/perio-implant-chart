import "./table.css";
import * as React from "react";

export default function ToothNumberCell({ toothNumber }) {
  const [textColor, setTextColor] = React.useState("black");
  const [isRed, setIsRed] = React.useState(false);

  function textClick(isRed) {
    isRed ? setTextColor("red") : setTextColor("black");
    setIsRed(isRed);
  }

  return (
    <td className="toothNumber">
      <span style={{ color: textColor }} onClick={() => textClick(!isRed)}>
        {toothNumber}
      </span>
    </td>
  );
}
