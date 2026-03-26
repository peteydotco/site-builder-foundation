import type { FontDef, FontPack } from '../types/siteThemes'
import googleFonts from './googleFonts'

export const fontGroups: Record<string, FontPack[]> = {
  minimal: [
    {
      packs: ['minimal'],
      headingFont: googleFonts.manrope,
      paragraphFont: googleFonts.poppins,
    },
    {
      packs: ['minimal'],
      headingFont: googleFonts.urbanist,
      paragraphFont: googleFonts.poppins,
    },
    {
      packs: ['minimal'],
      headingFont: googleFonts.instrumentserif,
      paragraphFont: googleFonts.newsreader,
    },
    {
      packs: ['minimal'],
      headingFont: googleFonts.familjengrotesk,
      paragraphFont: googleFonts.arimo,
    },
    {
      packs: ['minimal'],
      headingFont: googleFonts.archivo,
      paragraphFont: googleFonts.ptserif,
    },
    {
      packs: ['minimal'],
      headingFont: googleFonts.gildadisplay,
      paragraphFont: googleFonts.ptserif,
    },
    {
      packs: ['minimal'],
      headingFont: googleFonts.oswald,
      paragraphFont: googleFonts.arimo,
    },
    {
      packs: ['minimal'],
      headingFont: googleFonts.epilogue,
      paragraphFont: googleFonts.poppins,
    },
  ],
  vibrant: [
    {
      packs: ['vibrant'],
      headingFont: googleFonts.shrikhand,
      paragraphFont: googleFonts.bitter,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.concertone,
      paragraphFont: googleFonts.syne,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.youngserif,
      paragraphFont: googleFonts.bitter,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.capriola,
      paragraphFont: googleFonts.syne,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.lilitaone,
      paragraphFont: googleFonts.ibmplexmono,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.trocchi,
      paragraphFont: googleFonts.syne,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.averiaseriflibre,
      paragraphFont: googleFonts.bitter,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.agbalumo,
      paragraphFont: googleFonts.ptserif,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.bungee,
      paragraphFont: googleFonts.spacegrotesk,
    },
    {
      packs: ['vibrant'],
      headingFont: googleFonts.bebasneue,
      paragraphFont: googleFonts.familjengrotesk,
    },
    {
      packs: ['vibrant'],
      headingFont: {
        name: 'neue-haas-grotesk-display',
        style: {
          fontFamily: "'neue-haas-grotesk-display'",
          fontWeight: 700,
          fontStyle: 'normal',
        },
        className: 'neue-haas-grotesk-display',
      } as FontDef,
      paragraphFont: {
        name: 'neue-haas-grotesk-text',
        style: {
          fontFamily: "'neue-haas-grotesk-text'",
          fontWeight: 700,
          fontStyle: 'normal',
        },
        className: 'neue-haas-grotesk-text',
      } as FontDef,
    },
    {
      packs: ['vibrant'],
      headingFont: {
        name: 'AlkalineCaps',
        style: {
          fontFamily: "'AlkalineCaps'",
          fontWeight: 700,
          fontStyle: 'normal',
        },
        className: 'AlkalineCaps',
      } as FontDef,
      paragraphFont: googleFonts.poppins,
    },
    {
      packs: ['vibrant'],
      headingFont: {
        ...googleFonts.syne,
        style: {
          ...googleFonts.syne.style,
          fontWeight: 800,
        },
      },
      paragraphFont: googleFonts.spacemono,
      headerFont: googleFonts.silkscreen,
    },
  ],
  neutral: [
    {
      packs: ['neutral'],
      headingFont: googleFonts.librebaskerville,
      paragraphFont: googleFonts.almarai,
    },
    {
      packs: ['neutral'],
      headingFont: googleFonts.tenorsans,
      paragraphFont: googleFonts.pontanosans,
    },
    {
      packs: ['neutral'],
      headingFont: googleFonts.marcellus,
      paragraphFont: googleFonts.ptserif,
    },
    {
      packs: ['neutral'],
      headingFont: googleFonts.alice,
      paragraphFont: googleFonts.almarai,
    },
    {
      packs: ['neutral'],
      headingFont: googleFonts.neuton,
      paragraphFont: googleFonts.ptserif,
    },
    {
      packs: ['neutral'],
      headingFont: googleFonts.newsreader,
      paragraphFont: googleFonts.ptserif,
    },
    {
      packs: ['neutral'],
      headingFont: googleFonts.ovo,
      paragraphFont: googleFonts.almarai,
    },
    {
      packs: ['neutral'],
      headingFont: googleFonts.epilogue,
      paragraphFont: googleFonts.pontanosans,
    },
  ],
  modern: [
    {
      packs: ['modern'],
      headingFont: googleFonts.asap,
      paragraphFont: googleFonts.nunitosans,
    },
    {
      packs: ['modern'],
      headingFont: googleFonts.comfortaa,
      paragraphFont: googleFonts.worksans,
    },
    {
      packs: ['modern'],
      headingFont: googleFonts.sansita,
      paragraphFont: googleFonts.nunitosans,
    },
    {
      packs: ['modern'],
      headingFont: googleFonts.rubik,
      paragraphFont: googleFonts.nunitosans,
    },
  ],
  adventurous: [
    {
      packs: ['adventurous'],
      headingFont: googleFonts.climatecrisis,
      paragraphFont: googleFonts.archivo,
    },
    {
      packs: ['adventurous'],
      headingFont: googleFonts.ultra,
      paragraphFont: googleFonts.worksans,
    },
    {
      packs: ['adventurous'],
      headingFont: googleFonts.modak,
      paragraphFont: googleFonts.archivo,
    },
    {
      packs: ['adventurous'],
      headingFont: googleFonts.modak,
      paragraphFont: googleFonts.familjengrotesk,
    },
    {
      packs: ['adventurous'],
      headingFont: googleFonts.goblinone,
      paragraphFont: googleFonts.archivo,
    },
    {
      packs: ['adventurous'],
      headingFont: googleFonts.delagothicone,
      paragraphFont: googleFonts.worksans,
    },
    {
      packs: ['adventurous'],
      headingFont: googleFonts.archivoblack,
      paragraphFont: googleFonts.archivo,
    },
    {
      packs: ['adventurous'],
      headingFont: googleFonts.coiny,
      paragraphFont: googleFonts.familjengrotesk,
    },
  ],
}

const fonts: FontPack[] = Object.values(fontGroups).flatMap((array) => array)

export const getFontPack = (theme: string, index: number): FontPack =>
  fontGroups[theme][index]

export default fonts
