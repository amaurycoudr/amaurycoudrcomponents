import styled from "styled-components";
import {
  color,
  ColorProps,
  SpaceProps,
  typography,
  TypographyProps,
  variant,
} from "styled-system";
import { ResponsiveValue, Theme, TLengthStyledSystem } from "styled-system";
const typoVariant = {
  title: {
    lineHeight: "28px",
    fontSize: "24px",
    fontFamily: "roboto",
    fontWeight: "black",
  },
  section: {
    lineHeight: "24px",
    fontSize: "20px",
    fontFamily: "Robot",
    fontWeight: "bold",
  },
  header: {
    lineHeight: "16px",
    fontSize: "20px",
    fontFamily: "roboto",
    fontWeight: "medium",
  },
  label: {
    lineHeight: "16px",
    fontSize: "14px",
    fontFamily: "roboto",
    fontWeight: "medium",
  },
  legend: {
    lineHeight: "16px",
    fontSize: "14px",
    fontFamily: "noteSans",
    fontWeight: "light",
  },
  body: {
    lineHeight: "18px",
    fontSize: "16px",
    fontFamily: "noteSans",
    fontWeight: "regular",
  },
};

export type IColor =
  | (string &
      ResponsiveValue<
        string | number | symbol,
        Required<Theme<TLengthStyledSystem>>
      >)
  | undefined;

export interface TypoPros extends TypographyProps, ColorProps, SpaceProps {
  variant?: keyof typeof typoVariant;
  color?: string;
}
const Typo = styled.p<TypoPros>`
  display: flex;
  margin: 0;
  ${variant({
    variants: {
      title: {
        lineHeight: "28px",
        fontSize: "24px",
        fontFamily: "roboto",
        fontWeight: "black",
      },
      section: {
        lineHeight: "24px",
        fontSize: "20px",
        fontFamily: "roboto",
        fontWeight: "bold",
      },
      header: {
        lineHeight: "20px",
        fontSize: "16px",
        fontFamily: "roboto",
        fontWeight: "medium",
      },
      label: {
        lineHeight: "16px",
        fontSize: "14px",
        fontFamily: "roboto",
        fontWeight: "regular",
      },
      legend: {
        lineHeight: "16px",
        fontSize: "14px",
        fontFamily: "noteSans",
        fontWeight: "light",
      },
      body: {
        lineHeight: "18px",
        fontSize: "16px",
        fontFamily: "noteSans",
        fontWeight: "regular",
      },
    },
  })};
  ${color};
  ${typography};
`;

export default Typo;
