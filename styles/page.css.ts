import { style } from "@vanilla-extract/css";

export const item = style({
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
    },
  },
});

export const item1a = style({
  justifyContent: "flex-start",
  alignItems: "flex-start",
  gap: "16px",
});

export const item1b = style({});

export const item1c = style({});

export const item2a = style({});

export const item2b = style({});

export const item2c = style({});

export const item3a = style({});

export const item3b = style({});

export const item3c = style({});
