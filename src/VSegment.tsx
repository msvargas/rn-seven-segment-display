import React from "react";
import { View } from "react-native";
import Arrow from "./Arrow";
import { HSegmentProps } from "./HSegment";

declare interface VSegmentProps extends HSegmentProps {
  align: string;
}

export default function({ width, height, color, align }: VSegmentProps) {
  const style: any = {
    position: "absolute",
    width,
    height,
    backgroundColor: color
  };

  if (align === "left") style.left = 0;
  else style.right = 0;

  return (
    <View style={style}>
      <Arrow size={width} color={color} direction="top" />
      <Arrow size={width} color={color} direction="bottom" />
    </View>
  );
}
