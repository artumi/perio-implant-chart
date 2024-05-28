import Legend from "./Table/Legend.jsx";
import React from "react";

export const MucosaApp = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Legend chartType={"mucosa"} />
    </div>
  );
});
