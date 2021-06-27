import { FC } from "react";
import { iconVariant } from "./iconVariant";
export interface IconProps {
    variant: iconVariant;
    color: string;
    size?: number;
}
declare const Icon: FC<IconProps>;
export default Icon;
