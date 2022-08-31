import { style } from "@vanilla-extract/css";

export const layout = style({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "34px repeat(3, 1fr)",
  gap: "16px",
  padding: "16px",
});

export const container = style({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "34px 1fr 34px",
  gridTemplateAreas: `"." "subGrid" "."`,
  gap: "16px",
});

export const subGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "repeat(3, 1fr)",
  gap: "16px",
  gridArea: "subGrid",
});
