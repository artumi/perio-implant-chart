import Divider from "@mui/material/Divider";

export default function DividerRow() {
  return (
    <tr>
      <td
        colSpan="19"
        style={{
          border: "0px",
          height: "20px",
          backgroundColor: "#eee",
        }}
      >
        <Divider />
      </td>
    </tr>
  );
}
