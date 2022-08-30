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

export const layoutItem = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const layoutItem1a = style({
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

export const layoutItem1b = style({});

export const layoutItem1c = style({});

export const layoutItem2a = style({});

export const layoutItem2b = style({});

export const layoutItem2c = style({});

export const layoutItem3a = style({});

export const layoutItem3b = style({});

export const layoutItem3c = style({});
