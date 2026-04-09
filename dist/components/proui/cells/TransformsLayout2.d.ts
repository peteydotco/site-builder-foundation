import { type AnchorValue } from '../primitives/TransformOriginInput';
/**
 * ProUI TransformsLayout2 — scoped port of ImAdamTM/site-themes
 * BlockDialog/panels/shared/TransformsLayout2.js.
 *
 * The 2D transforms cell group matching the screenshot: Opacity (0–100%),
 * Rotate (degrees), Scale (0–200%), Skew (X/Y degrees), Offset (X/Y
 * pixels), Anchor (3×3 picker). Each property is its own Field row with
 * an icon and ProUI Input.
 *
 * Controlled component: parent owns `value` and receives updates via
 * `onChange`. The onChange is called with a partial update so the parent
 * can merge incrementally.
 *
 * Adam's version supports FoldableList expansion for advanced properties
 * and a [2D | 3D] mode toggle. Those are deferred — this cell renders all
 * 2D properties in a flat list.
 */
export interface TransformsValue {
    opacity: number;
    rotate: number;
    scale: number;
    skewX: number;
    skewY: number;
    offsetX: number;
    offsetY: number;
    anchor: AnchorValue;
}
export interface TransformsLayout2Props {
    value: TransformsValue;
    onChange: (partial: Partial<TransformsValue>) => void;
}
declare function TransformsLayout2Component({ value, onChange }: TransformsLayout2Props): import("react/jsx-runtime").JSX.Element;
declare const TransformsLayout2: import("react").MemoExoticComponent<typeof TransformsLayout2Component>;
export default TransformsLayout2;
export { TransformsLayout2 };
