import { css } from "styled-components";

export const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phone: 376
};

const tileWidth = 10;
const tileMargin = 1;

export const constants = {
  bannerHeight: "5rem",
  sidebarFullWidth: "20rem",
  sidebarCollapsedWidth: "4rem",
  tileWidth, // these are in rem
  tileMargin,
  tileWidthWide: tileWidth * 2 + tileMargin // this is so it lines up right with 2 singles
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (min-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
