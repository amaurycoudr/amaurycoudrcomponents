import styled from "styled-components";
import {
  border,
  BorderProps,
  borderRadius,
  borderStyle,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
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
`;

export default BoxButton;
