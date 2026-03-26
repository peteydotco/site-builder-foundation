import { ReactNode } from 'react';
interface ListOverflowProps<T = unknown> {
    items: T[];
    getItem: (item: T, index: number) => ReactNode;
    columns?: number;
    max?: number;
}
declare function ListOverflow<T = unknown>({ items, getItem, columns, max, }: ListOverflowProps<T>): import("react/jsx-runtime").JSX.Element;
declare const _default: typeof ListOverflow;
export default _default;
