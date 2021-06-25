import React, { FC } from "react";
import icons, { iconVariant } from "./iconVariant";

export interface IconProps {
  variant: iconVariant;
  color: string;
  size?: number;
}
const Icon: FC<IconProps> = ({ variant, size = 24, color }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <path fill={color} d={icons[variant]} />
    </svg>
  );
};

export default Icon;
