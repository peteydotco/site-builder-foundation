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
  label: string
  defaultValue: unknown
}

export interface StringField extends SchemaFieldBase {
  type: 'string'
  defaultValue: string
  placeholder?: string
}

export interface NumberField extends SchemaFieldBase {
  type: 'number'
  defaultValue: number
  min?: number
  max?: number
  step?: number
}

export interface ColorField extends SchemaFieldBase {
  type: 'color'
  defaultValue: string // CSS color value, supports custom properties and gradients
}

export interface BooleanField extends SchemaFieldBase {
  type: 'boolean'
  defaultValue: boolean
}

export type SchemaField = StringField | NumberField | ColorField | BooleanField

export type ComponentSchema = Record<string, SchemaField>

/**
 * A single file within a component's file set.
 */
export interface ComponentFile {
  id: string
  name: string       // e.g. "index.tsx", "styles.css"
  language: string   // Monaco language id
  content: string
  isEntry: boolean   // true for the main file (index.tsx)
}

/**
 * Top-level component state.
 */
export interface ComponentState {
  name: string
  files: ComponentFile[]
  activeFileId: string
  schema: ComponentSchema | null  // parsed from code, null if not yet parsed
  propsOverrides: Record<string, unknown>  // user overrides via design controls
}

/**
 * Theme tokens injected from the site's active section theme.
 */
export interface ThemeTokens {
  // HSL values for CSS custom properties
  '--accent-hsl': string
  '--lightaccent-hsl': string
  '--darkaccent-hsl': string
  '--black-hsl': string
  '--white-hsl': string
  // Font stacks
  '--heading-font-family': string
  '--body-font-family': string
  // Extend as needed from Squarespace theme engine
  [key: string]: string
}
