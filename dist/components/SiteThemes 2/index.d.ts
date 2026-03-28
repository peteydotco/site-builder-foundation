import type { SiteThemesState } from '../../types/siteThemes';
interface SiteThemesContextValue extends SiteThemesState {
    route: string[];
    depth: number;
    onBack: () => void;
}
export declare const SiteThemesContext: import("react").Context<SiteThemesContextValue>;
export declare const useSiteThemesContext: () => SiteThemesContextValue;
interface SiteThemesProps {
    isOpen: boolean;
    themeState: SiteThemesState;
    className?: string;
    onClose?: () => void;
}
declare function SiteThemes({ isOpen, themeState, className, onClose }: SiteThemesProps): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").MemoExoticComponent<typeof SiteThemes>;
export default _default;
