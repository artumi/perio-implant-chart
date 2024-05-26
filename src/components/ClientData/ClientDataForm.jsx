import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import "../Table/table.css";

export default function ClientDataForm() {
  const ariaLabel = { "aria-label": "description" };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "70ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="clientDataInput">
        <TextField
          label="LastName"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <TextField
          label="FirstName"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <TextField
          label="DateOfBirth"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
        <TextField
          className="dateInput"
          label="Date"
          id="outlined-size-small"
          defaultValue=""
          size="small"
        />
      </div>
    </Box>
  );
}
