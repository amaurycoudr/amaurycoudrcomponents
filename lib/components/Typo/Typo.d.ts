import { ColorProps, SpaceProps, TypographyProps } from "styled-system";
import { ResponsiveValue, Theme, TLengthStyledSystem } from "styled-system";
declare const typoVariant: {
    title: {
        lineHeight: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
    };
    section: {
        lineHeight: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
    };
    header: {
        lineHeight: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
    };
    label: {
        lineHeight: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
    };
    legend: {
        lineHeight: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
    };
    body: {
        lineHeight: string;
        fontSize: string;
        fontFamily: string;
        fontWeight: string;
    };
};
export declare type IColor = (string & ResponsiveValue<string | number | symbol, Required<Theme<TLengthStyledSystem>>>) | undefined;
export interface TypoPros extends TypographyProps, ColorProps, SpaceProps {
    variant?: keyof typeof typoVariant;
    color?: string;
}
declare const Typo: import("styled-components").StyledComponent<"p", import("styled-components").DefaultTheme, TypoPros, never>;
export default Typo;
