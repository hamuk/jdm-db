import { css } from "styled-components";

const sizes = {
  giant: 1199,
  desktop: 991,
  tablet: 768,
  phone: 575
};

export const theme = {
  main: "#012a36"
};

export const constants = {
  topBarHeight: "173px"
};

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)};
    }
  `;
  return accumulator;
}, {});
