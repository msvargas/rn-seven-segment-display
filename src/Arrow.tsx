import React from "react";
import { View } from "react-native";
import styles from "./styles";

export enum INVERSE_DIRECTION {
  left = "right",
  right = "left",
  top = "bottom",
  bottom = "top"
}

export enum BORDER_COLOR_PROP {
  left = "borderLeftColor",
  right = "borderRightColor",
  top = "borderTopColor",
  bottom = "borderBottomColor"
}

export declare interface ArrowsProps {
  size: number;
  color: string;
  direction: "left" | "right" | "top" | "bottom";
}

export default function({ size, color, direction }: ArrowsProps) {
  return (
    <View
      style={[
        styles.arrow,
        {
          borderWidth: size * 0.5,
          [BORDER_COLOR_PROP[INVERSE_DIRECTION[direction]]]: color,
          [INVERSE_DIRECTION[direction]]: "100%"
        }
      ]}
    />
  );
}
