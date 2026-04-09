/**
 * ProUI TransformOriginInput — 3×3 anchor/origin picker.
 *
 * Scoped port of ImAdamTM/site-themes TransformOriginInput. Inline
 * click-to-select: 9 positions representing (0,0) top-left through
 * (100,100) bottom-right in 50% increments. The full drag-to-position
 * popup control from Adam's repo is deferred.
 *
 * Value shape matches Adam's: `{ x: number, y: number }` where each is
 * 0–100 (percentage). Default center = { x: 50, y: 50 }.
 *
 * Usage:
 *   <TransformOriginInput
 *     value={origin}
 *     onChange={setOrigin}
 *   />
 */
export interface AnchorValue {
    x: number;
    y: number;
}
export interface TransformOriginInputProps {
    value: AnchorValue;
    onChange: (value: AnchorValue) => void;
    'aria-label'?: string;
}
declare function TransformOriginInputComponent({ value, onChange, 'aria-label': ariaLabel, }: TransformOriginInputProps): import("react/jsx-runtime").JSX.Element;
declare const TransformOriginInput: import("react").MemoExoticComponent<typeof TransformOriginInputComponent>;
export default TransformOriginInput;
export { TransformOriginInput };
