import React, { type ReactNode, type LabelHTMLAttributes } from 'react';
interface FieldProps {
    children?: ReactNode;
    className?: string;
    /** Add horizontal padding via --proui-dialog-padding. Default: true. */
    padding?: boolean;
    /** Remove vertical gap between rows (for tight stacks). Default: false. */
    stack?: boolean;
}
declare function FieldComponent({ children, className, padding, stack, }: FieldProps): import("react/jsx-runtime").JSX.Element;
interface LabelProps extends Omit<LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
    children?: ReactNode;
    /** Bold label for section headers. */
    primary?: boolean;
    /** Indented / muted label for sub-fields. */
    indent?: boolean;
    /** Uppercase small-caps label for section dividers. */
    mini?: boolean;
    /** Right-aligned options slot (reset buttons, unlink toggles, etc.). */
    options?: ReactNode;
}
declare function LabelComponent({ children, primary, indent, mini, options, ...rest }: LabelProps): import("react/jsx-runtime").JSX.Element;
interface ObjectProps {
    children?: ReactNode;
    /** Use flex layout instead of subgrid (for multi-control rows with gap). */
    flexColumn?: boolean;
    /** CSS grid-column value. Default `'auto / span 2'`. */
    column?: string;
}
declare function ObjectComponent({ children, flexColumn, column, }: ObjectProps): import("react/jsx-runtime").JSX.Element;
interface CollapsibleProps {
    children?: ReactNode;
    collapsed?: boolean;
}
declare function CollapsibleComponent({ children, collapsed }: CollapsibleProps): import("react/jsx-runtime").JSX.Element;
interface FieldComponentWithStatics extends React.MemoExoticComponent<typeof FieldComponent> {
    Label: typeof LabelMemo;
    Object: typeof ObjectMemo;
    Collapsible: typeof CollapsibleMemo;
}
declare const LabelMemo: React.MemoExoticComponent<typeof LabelComponent>;
declare const ObjectMemo: React.MemoExoticComponent<typeof ObjectComponent>;
declare const CollapsibleMemo: React.MemoExoticComponent<typeof CollapsibleComponent>;
declare const Field: FieldComponentWithStatics;
export default Field;
export { LabelMemo as Label, ObjectMemo as FieldObject, CollapsibleMemo as Collapsible };
export type { FieldProps, LabelProps, ObjectProps, CollapsibleProps };
