// reset.css.ts
// Globals + CSS Reset.

import { globalStyle } from "@vanilla-extract/css";

// CSS RESET
// https://garden.bradwoods.io/notes/css-reset

// Use a more intuitive box-sizing model.
globalStyle(`*, *::before, *::after`, {
  boxSizing: `border-box`,
});

// Remove all margins & padding.
globalStyle(`*`, {
  margin: 0,
  padding: 0,
});

// Prevent mobile browsers increasing font-size.
globalStyle(`html`, {
  textSizeAdjust: `none`,
  minHeight: `calc(100% + env(safe-area-inset-top))`,
  padding: `env(safe-area-inset-top) 0 env(safe-area-inset-bottom) 0`,
});

// Allow percentage-based heights.
globalStyle(`html, body`, {
  height: `100%`,
  position: `relative`,
});
globalStyle(`#__next`, {
  height: `100%`,
  position: `relative`,
});

globalStyle(`body`, {
  // Improve text rendering.
  fontSmooth: `antialiased`,
  // Prevent the rubber band scroll effect when the user hits the top or bottom of the document.
  overscrollBehavior: `none`,
  color: `#1a1a1a`,
  fontFamily: `Inter, sans-serif`,
  textAlign: `center`,
});

// Remove unintuitive behavior such as gaps around media elements.
globalStyle(`img, picture, video, canvas, svg, iframe`, {
  display: `block`,
});

// Avoid text overflow.
globalStyle(`h1, h2, h3, h4, h5, h6, p, strong, em, pre, code, blockquote, ul, ol, li`, {
  fontWeight: 400,
  overflowWrap: `break-word`,
});
// Avoid text overflow.
globalStyle(`pre`, {
  whiteSpace: `pre-wrap`,
  paddingTop: 8,
  paddingLeft: 8,
  paddingRight: 8,
  borderTop: `2px solid #1a1a1a`,
});

globalStyle(`code`, {
  paddingRight: 2,
  paddingLeft: 2,
  border: `2px solid #1a1a1a`,
});

globalStyle(`pre > code`, {
  border: `none`,
});

globalStyle(`a`, {
  color: `inherit`,
  fontWeight: `bold`,
  textDecoration: `none`,
  fontFamily: `Losta Bonita`,
});

globalStyle(`ul, ol`, {
  listStyle: `none`,
});

globalStyle(`input`, {
  border: `none`,
});

// Create a root stacking context (only when using JS frameworks like React).
globalStyle(`#__next`, {
  isolation: `isolate`,
});
