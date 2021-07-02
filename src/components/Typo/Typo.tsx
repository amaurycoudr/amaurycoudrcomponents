import styled from "styled-components";
import { color, SpaceProps, typography, TypographyProps } from "styled-system";
import { Color } from "../../theme/lightColors";
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

export interface TypoPros extends TypographyProps, SpaceProps {
  variant?: keyof typeof typoVariant;
  color?: Color;
  bg?: Color;
}
const H1 = styled.h1<TypoPros>`
  display: flex;
  margin: 0;
  line-height: 28px;
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: ${({ theme }) => theme.fontWeights.black};
  ${color};
  ${typography};
`;
const H2 = styled.h2<TypoPros>`
  display: flex;
  margin: 0;
  line-height: 24px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  ${color};
  ${typography};
`;
const H3 = styled.h3<TypoPros>`
  display: flex;
  margin: 0;
  line-height: 20px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  ${color};
  ${typography};
`;
const Bold = styled.b<TypoPros>`
  display: flex;
  margin: 0;
  line-height: 16px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  ${color};
  ${typography};
`;
const Small = styled.small<TypoPros>`
  display: flex;
  margin: 0;
  line-height: 16px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.noteSans};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  ${color};
  ${typography};
`;
const P = styled.p<TypoPros>`
  display: flex;
  margin: 0;
  line-height: 18px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.noteSans};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  ${color};
  ${typography};
`;
const Typo = styled.p<TypoPros>`
  display: flex;
  margin: 0;
  ${color};
  ${typography};
`;

export { Typo, P, Small, Bold, H3, H2, H1 };
