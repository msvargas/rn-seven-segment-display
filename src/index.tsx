import React from "react";
import { View, ViewStyle } from "react-native";
import HSegment from "./HSegment";
import VSegment from "./VSegment";

/**
  * References: http://www.uize.com/examples/seven-segment-display.html
 * Example: 0 = 0x3f
 *  G	F	E	D	C	B	A
    0	1	1	1	1	1	1
 */
export const segmentMap: { [key: string]: number } = {
  "0": 0x3f, // 0
  "1": 0x30, // 1
  "2": 0x5b, // 2
  "3": 0x4f, // 3
  "4": 0x66, // 4
  "5": 0x6d, // 5
  "6": 0x7d, // 6
  "7": 0x07, // 7
  "8": 0x7f, // 8
  "9": 0x6f, // 9
  A: 0x77,
  //B : , // not support
  C: 0x39,
  // D : , //not support
  E: 0x79,
  F: 0x71,
  G: 0x3d,
  H: 0x76,
  //I: ,//not support
  J: 0x1e,
  //K: , // not support
  L: 0x0e,
  //M: , // not support
  N: 0x37,
  // O: , //not support
  P: 0x73,
  //Q: , //not support
  //R: ,//not support
  // S: ,//not support
  //T: ,//not support
  U: 0x3e,
  Y: 0x6e,
  a: 0x5f,
  b: 0x7c,
  c: 0x58,
  d: 0x5e,
  e: 0x7b,
  h: 0x74,
  i: 0x10,
  j: 0x0e,
  l: 0x06,
  n: 0x15,
  o: 0x5c,
  q: 0x67,
  r: 0x50,
  t: 0x78,
  u: 0x1c,
  dash: 0x40,
  underscore: 0x08,
  equal: 0x48
};
export const bitReadAll = (value: number) =>
  [6, 5, 4, 3, 2, 1, 0].map(bit => Boolean((value >> bit) & 0x01));

export declare interface SevenSegmentProps {
  width?: number;
  height?: number;
  onColor?: string;
  offColor?: string;
  style?: ViewStyle;
  value: string;
}

const defaultProps = {
  width: 40,
  height: 5,
  value: "dash",
  onColor: "rgba(255,0,0,1)",
  offColor: "rgba(127,127,127,0.15)"
};

export default function SevenSegmentDisplay({
  width = defaultProps.width,
  height = defaultProps.height,
  onColor = defaultProps.onColor,
  offColor = defaultProps.offColor,
  value,
  style
}: SevenSegmentProps = defaultProps) {
  width = +width;
  height = +height;

  const [g, f, e, d, c, b, a] = bitReadAll(
    value in segmentMap ? segmentMap[value] : Number(value)
  );

  return (
    <View style={[{ width: width + height * 2 }, style]}>
      <HSegment width={width} height={height} color={a ? onColor : offColor} />
      <View style={{ position: "relative", width: "100%", height: width }}>
        <VSegment
          width={height}
          height={width}
          color={f ? onColor : offColor}
          align="left"
        />
        <VSegment
          width={height}
          height={width}
          color={b ? onColor : offColor}
          align="right"
        />
      </View>
      <HSegment width={width} height={height} color={g ? onColor : offColor} />
      <View style={{ position: "relative", width: "100%", height: width }}>
        <VSegment
          width={height}
          height={width}
          color={e ? onColor : offColor}
          align="left"
        />
        <VSegment
          width={height}
          height={width}
          color={c ? onColor : offColor}
          align="right"
        />
      </View>
      <HSegment width={width} height={height} color={d ? onColor : offColor} />
    </View>
  );
}

SevenSegmentDisplay.defaultProps = defaultProps;
