import Legend from "./Table/Legend.jsx";
import React from "react";

export const ParadontalApp = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Legend />
    </div>
  );
});
