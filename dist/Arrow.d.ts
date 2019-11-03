/// <reference types="react" />
export declare enum INVERSE_DIRECTION {
    left = "right",
    right = "left",
    top = "bottom",
    bottom = "top"
}
export declare enum BORDER_COLOR_PROP {
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
export default function ({ size, color, direction }: ArrowsProps): JSX.Element;
