/// <reference types="react" />
import { ViewStyle } from "react-native";
/**
  * References: http://www.uize.com/examples/seven-segment-display.html
 * Example: 0 = 0x3f
 *  G	F	E	D	C	B	A
    0	1	1	1	1	1	1
 */
export declare const segmentMap: {
    [key: string]: number;
};
export declare const bitReadAll: (value: number) => boolean[];
export declare interface SevenSegmentProps {
    width?: number;
    height?: number;
    onColor?: string;
    offColor?: string;
    style?: ViewStyle;
    value: string;
}
declare function SevenSegmentDisplay({ width, height, onColor, offColor, value, style }?: SevenSegmentProps): JSX.Element;
declare namespace SevenSegmentDisplay {
    var defaultProps: {
        width: number;
        height: number;
        value: string;
        onColor: string;
        offColor: string;
    };
}
export default SevenSegmentDisplay;
