import type { FormPack } from '../types/siteThemes'

export const formGroups: Record<string, FormPack[]> = {
  vibrant: [
    {
      packs: ['vibrant'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
      option: {
        button: false,
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['vibrant'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
      option: {
        button: true,
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['vibrant'],
      input: {
        fill: true,
        shape: 'square',
        outline: '0px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
      option: {
        button: true,
        fill: true,
        shape: 'square',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['vibrant'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: true,
        shape: 'circle',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['vibrant'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['1em', '0em', '1em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['vibrant'],
      input: {
        fill: true,
        shape: 'underline',
        outline: '1px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'circle',
        outline: '0px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['vibrant'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '0px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
      option: {
        button: false,
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
  ],
  neutral: [
    {
      packs: ['neutral'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'custom',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['neutral'],
      input: {
        fill: false,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: false,
        inverted: false,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['neutral'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: false,
        shape: 'custom',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['neutral'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: true,
        fill: true,
        inverted: false,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['neutral'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'circle',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['neutral'],
      input: {
        fill: true,
        shape: 'underline',
        outline: '0px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: true,
        fill: true,
        inverted: false,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
  ],
  modern: [
    {
      packs: ['modern'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '0px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'circle',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['modern'],
      input: {
        fill: false,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: false,
        fill: false,
        inverted: false,
        shape: 'circle',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['modern'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: false,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['modern'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: true,
        fill: true,
        inverted: false,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['modern'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: true,
        fill: true,
        inverted: false,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['modern'],
      input: {
        fill: true,
        shape: 'underline',
        outline: '1px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'circle',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
  ],
  minimal: [
    {
      packs: ['minimal'],
      input: {
        fill: false,
        shape: 'underline',
        outline: '1px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: true,
        fill: true,
        inverted: false,
        shape: 'square',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['minimal'],
      input: {
        fill: true,
        shape: 'square',
        outline: '0px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'circle',
        outline: '0px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['minimal'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'circle',
        outline: '0px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['minimal'],
      input: {
        fill: false,
        shape: 'square',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: false,
        inverted: false,
        shape: 'square',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['minimal'],
      input: {
        fill: true,
        shape: 'underline',
        outline: '1px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'square',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['minimal'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '0px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: true,
        fill: true,
        inverted: false,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
  ],
  adventurous: [
    {
      packs: ['adventurous'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
      option: {
        button: false,
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['adventurous'],
      input: {
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
      option: {
        button: true,
        fill: true,
        shape: 'pill',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['adventurous'],
      input: {
        fill: true,
        shape: 'square',
        outline: '0px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
      option: {
        button: true,
        fill: true,
        shape: 'square',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['adventurous'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
      option: {
        button: false,
        fill: true,
        shape: 'circle',
        outline: '1px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
    {
      packs: ['adventurous'],
      input: {
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['1em', '0em', '1em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        shape: 'custom',
        outline: '1px',
        borderRadius: ['0.5em', '0.5em', '0.5em', '0.5em'],
      },
    },
    {
      packs: ['adventurous'],
      input: {
        fill: true,
        shape: 'underline',
        outline: '1px',
        borderRadius: ['0em', '0em', '0em', '0em'],
      },
      option: {
        button: false,
        fill: true,
        inverted: true,
        shape: 'circle',
        outline: '0px',
        borderRadius: ['1em', '1em', '1em', '1em'],
      },
    },
  ],
}

const forms: FormPack[] = Object.values(formGroups).flatMap((array) => array)

export const getFormPack = (theme: string, index: number): FormPack =>
  formGroups[theme][index]

export default forms
