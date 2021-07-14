import styled from "styled-components";
import {
  background,
  border,
  borderRadius,
  borderStyle,
  color,
  flexbox,
  layout,
  position,
  space,
} from "styled-system";
import { BoxProps } from "../Box/Box";

const BoxButton = styled.button<BoxProps>`
  display: flex;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: not-allowed;
  }
  ${color};
  ${space};
  ${border}
  ${borderStyle};
  ${borderRadius}
  ${flexbox};
  ${position};
  ${layout};
  ${background};
`;

export default BoxButton;
