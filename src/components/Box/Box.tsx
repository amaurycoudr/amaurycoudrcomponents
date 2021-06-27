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
export type BoxProps = BorderProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  LayoutProps & {
    bg?: string;
  };

const Box = styled.div<BoxProps>`
  display: flex;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  ${color};
  ${space};
  ${border}
  ${borderStyle};
  ${borderRadius}
  ${flexbox};
  ${position};
  ${layout};
`;

export default Box;
