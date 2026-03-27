interface ButtonPreviewProps {
    borderRadius?: [string, string, string, string];
    children?: React.ReactNode;
    className?: string;
    fill?: boolean;
    fontWeight?: number;
    invert?: boolean;
    isHover?: boolean;
    outline?: string;
    padding?: {
        x: string;
        y: string;
    };
    primaryColor?: string;
    primaryColorNoFill?: string;
    secondaryColor?: string;
    secondaryColorNoFill?: string;
    shape?: string;
    textTransform?: string;
}
declare function ButtonPreview(props: ButtonPreviewProps): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof ButtonPreview>;
export default _default;
