import { ReactNode } from 'react';
interface DisclosureProps {
    label?: ReactNode;
    suffix?: ReactNode;
    href?: string;
}
declare function Disclosure({ label, suffix, href, ...rest }: DisclosureProps & React.AnchorHTMLAttributes<HTMLAnchorElement>): import("react").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof Disclosure>;
export default _default;
