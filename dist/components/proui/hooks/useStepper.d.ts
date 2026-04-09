import { type MutableRefObject } from 'react';
/**
 * ProUI scrub/step hook — port of ImAdamTM/site-themes useStepper.js.
 *
 * Drives three interactions:
 *  - Click + drag on the scrub area → emits step deltas based on mouse travel.
 *    `isHorizontalScrub` selects the axis (horizontal = drag left/right,
 *    vertical = drag up/down).
 *  - Mousedown on `upRef` → step up by +1 (held → auto-repeat after 500ms).
 *  - Mousedown on `downRef` → step down by -1 (same auto-repeat).
 *
 * The caller passes `onStep(delta, isFirst, isDrag)` and receives refs to
 * attach to the interactive elements. The hook tracks `isActive`,
 * `isDragging`, `isMax`, `isMin`, `activeDirection` for visual feedback.
 */
export type StepDirection = 'up' | 'down' | 'left' | 'right' | null;
export interface UseStepperProps {
    onStep: (delta: number, isFirst: boolean, isDrag: boolean) => void;
    onBlur?: () => void;
    value: number;
    min?: number;
    max?: number;
    isHorizontalScrub?: boolean;
}
export interface UseStepperResult {
    scrubRef: MutableRefObject<HTMLButtonElement | null>;
    upRef: MutableRefObject<HTMLButtonElement | null>;
    downRef: MutableRefObject<HTMLButtonElement | null>;
    isActive: boolean;
    isDragging: boolean;
    isMax: boolean;
    isMin: boolean;
    activeDirection: StepDirection;
}
export declare function useStepper({ onStep, onBlur, value, min, max, isHorizontalScrub, }: UseStepperProps): UseStepperResult;
export default useStepper;
