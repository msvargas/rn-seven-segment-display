import React from "react";
import { View } from "react-native";
import Arrow from "./Arrow";
import styles from "./styles";

export declare interface HSegmentProps {
  width: number;
  height: number;
  color: string;
}

export default function({ width, height, color }: HSegmentProps) {
  return (
    <View
      style={[
        styles.hsegment,
        {
          width,
          height,
          backgroundColor: color
        }
      ]}
    >
      <Arrow size={height} color={color} direction="left" />
      <Arrow size={height} color={color} direction="right" />
    </View>
  );
}
