/**
 * Schema system type definitions.
 *
 * Components export a `schema` object that defines their props contract.
 * The schema drives:
 * - CMS design controls (auto-generated from field definitions)
 * - Default values for the component preview
 * - Type validation at edit time
 *
 * Theme tokens (CSS custom properties like var(--accent-hsl)) are valid
 * default values for color fields — they resolve at render time based on
 * the active section theme.
 */
export interface SchemaFieldBase {
    label: string;
    defaultValue: unknown;
}
export interface StringField extends SchemaFieldBase {
    type: 'string';
    defaultValue: string;
    placeholder?: string;
}
export interface NumberField extends SchemaFieldBase {
    type: 'number';
    defaultValue: number;
    min?: number;
    max?: number;
    step?: number;
}
export interface ColorField extends SchemaFieldBase {
    type: 'color';
    defaultValue: string;
}
export interface BooleanField extends SchemaFieldBase {
    type: 'boolean';
    defaultValue: boolean;
}
export type SchemaField = StringField | NumberField | ColorField | BooleanField;
export type ComponentSchema = Record<string, SchemaField>;
/**
 * A single file within a component's file set.
 */
export interface ComponentFile {
    id: string;
    name: string;
    language: string;
    content: string;
    isEntry: boolean;
}
/**
 * Top-level component state.
 */
export interface ComponentState {
    name: string;
    files: ComponentFile[];
    activeFileId: string;
    schema: ComponentSchema | null;
    propsOverrides: Record<string, unknown>;
}
/**
 * Theme tokens injected from the site's active section theme.
 */
export interface ThemeTokens {
    '--accent-hsl': string;
    '--lightaccent-hsl': string;
    '--darkaccent-hsl': string;
    '--black-hsl': string;
    '--white-hsl': string;
    '--heading-font-family': string;
    '--body-font-family': string;
    [key: string]: string;
}
