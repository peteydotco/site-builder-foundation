import React, { type ReactNode } from 'react';
/**
 * ProUI FoldableList — scoped port of ImAdamTM/site-themes FoldableList.
 *
 * A group container that renders its children stacked, with an optional
 * "show more / less" toggle when a `defaultVisibleCount` is set. Adam's
 * full version supports staggered TransitionSwap animations and a
 * FoldableListContext; we strip to the functional essentials since the
 * cells use it mainly as a grouping container with per-item visibility
 * toggles.
 *
 * Usage:
 *   <FoldableList>
 *     <FoldableList.Item><Field>...</Field></FoldableList.Item>
 *     <FoldableList.Item><Field>...</Field></FoldableList.Item>
 *   </FoldableList>
 */
export interface FoldableListItemProps {
    children?: ReactNode;
    /** If false, hide this item (used by Adam's pattern for add-property
     *  toggles — an item can be "inactive" and not show until activated). */
    expanded?: boolean;
}
declare function ItemComponent({ children, expanded }: FoldableListItemProps): import("react/jsx-runtime").JSX.Element | null;
declare const Item: React.MemoExoticComponent<typeof ItemComponent>;
export interface FoldableListProps {
    children?: ReactNode;
    className?: string;
    /** Show only the first N items initially, with a "More" toggle to
     *  expand the rest. Omit for "always show all". */
    defaultVisibleCount?: number;
    labelExpand?: string;
    labelCollapse?: string;
}
declare function FoldableListComponent({ children, className, defaultVisibleCount, labelExpand, labelCollapse, }: FoldableListProps): import("react/jsx-runtime").JSX.Element;
interface FoldableListWithStatics extends React.MemoExoticComponent<typeof FoldableListComponent> {
    Item: typeof Item;
}
declare const FoldableList: FoldableListWithStatics;
export default FoldableList;
export { Item as FoldableListItem };
