/**
 * Animated menu-search icon based on RiMenuSearchLine.
 *
 * Collapsed: exact RiMenuSearchLine layout — three bars + magnifying glass
 * Expanded:  bars shrink to 0 width (left), glass scales up to fill container
 *
 * Uses CSS transitions on rect width + transform. Stroke width stays constant.
 */
export default function AnimatedSearchIcon({ expanded, size, color, }: {
    expanded?: boolean;
    size?: number;
    color?: string;
}): import("react/jsx-runtime").JSX.Element;
