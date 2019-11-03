/// <reference types="react" />
import { HSegmentProps } from "./HSegment";
declare interface VSegmentProps extends HSegmentProps {
    align: string;
}
export default function ({ width, height, color, align }: VSegmentProps): JSX.Element;
export {};
