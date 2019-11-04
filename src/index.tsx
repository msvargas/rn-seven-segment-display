import React from "react";
import { View, ViewStyle, Platform } from "react-native";
import HSegment from "./HSegment";
import VSegment from "./VSegment";

/**
  * References: http://www.uize.com/examples/seven-segment-display.html
 * Example: 0 = 0x3f
 *  G	F	E	D	C	B	A
    0	1	1	1	1	1	1
 */
export const bitReadAll = (value: number) =>
  [6, 5, 4, 3, 2, 1, 0].map(bit => Boolean((value >> bit) & 0x01));

export const segmentMap: { [key: string]: boolean[] } = {
  "0": bitReadAll(0x3f), // 0
  "1": bitReadAll(0x06), // 1
  "2": bitReadAll(0x5b), // 2
  "3": bitReadAll(0x4f), // 3
  "4": bitReadAll(0x66), // 4
  "5": bitReadAll(0x6d), // 5
  "6": bitReadAll(0x7d), // 6
  "7": bitReadAll(0x07), // 7
  "8": bitReadAll(0x7f), // 8
  "9": bitReadAll(0x6f), // 9
  A: bitReadAll(0x77),
  //B : , // not support
  C: bitReadAll(0x39),
  // D : , //not support
  E: bitReadAll(0x79),
  F: bitReadAll(0x71),
  G: bitReadAll(0x3d),
  H: bitReadAll(0x76),
  //I: ,//not support
  J: bitReadAll(0x1e),
  //K: , // not support
  L: bitReadAll(0x0e),
  //M: , // not support
  N: bitReadAll(0x37),
  // O: , //not support
  P: bitReadAll(0x73),
  //Q: , //not support
  //R: ,//not support
  // S: ,//not support
  //T: ,//not support
  U: bitReadAll(0x3e),
  Y: bitReadAll(0x6e),
  a: bitReadAll(0x5f),
  b: bitReadAll(0x7c),
  c: bitReadAll(0x58),
  d: bitReadAll(0x5e),
  e: bitReadAll(0x7b),
  h: bitReadAll(0x74),
  i: bitReadAll(0x10),
  j: bitReadAll(0x0e),
  l: bitReadAll(0x06),
  n: bitReadAll(0x15),
  o: bitReadAll(0x5c),
  q: bitReadAll(0x67),
  r: bitReadAll(0x50),
  t: bitReadAll(0x78),
  u: bitReadAll(0x1c),
  "-": bitReadAll(0x40),
  _: bitReadAll(0x08),
  "=": bitReadAll(0x48)
};

export declare interface SevenSegmentProps {
  width?: number;
  height?: number;
  onColor?: string;
  offColor?: string;
  style?: ViewStyle;
  value: string;
}

const defaultProps = {
  width:  Platform.OS === "web" ? 40 : 20,
  height: Platform.OS === "web" ? 8 : 5,
  value: "-",
  onColor: "#3ADF00",
  offColor: "rgba(0,255,0,0.1)"
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

  const [g, f, e, d, c, b, a] =
    value in segmentMap ? segmentMap[value] : bitReadAll(Number(value));

  return (
    <View style={[{ width: width + height * 2, margin : 4 }, style]}>
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
