import type { FormPack } from '../types/siteThemes';
export declare const formGroups: Record<string, FormPack[]>;
declare const forms: FormPack[];
export declare const getFormPack: (theme: string, index: number) => FormPack;
export default forms;
