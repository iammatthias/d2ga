import { style } from "@vanilla-extract/css";

export const layout = style({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gridColumnGap: "0px",
  gridRowGap: "0px",
  gap: "16px",
  padding: "16px",
});
