import type { FontDef } from '../types/siteThemes'

function makeFont(name: string, family: string, weight: number = 400, query: string): FontDef {
  return {
    name,
    style: {
      fontFamily: `'${family}', sans-serif`,
      fontWeight: weight,
      fontStyle: 'normal',
    },
    className: name.toLowerCase().replace(/\s+/g, '-'),
    googleFontsQuery: query,
  }
}

function makeSerifFont(name: string, family: string, weight: number = 400, query: string): FontDef {
  return {
    name,
    style: {
      fontFamily: `'${family}', serif`,
      fontWeight: weight,
      fontStyle: 'normal',
    },
    className: name.toLowerCase().replace(/\s+/g, '-'),
    googleFontsQuery: query,
  }
}

const googleFonts = {
  // Vibrant heading fonts
  shrikhand: makeFont('Shrikhand', 'Shrikhand', 400, 'Shrikhand:wght@400'),
  concertone: makeFont('Concert One', 'Concert One', 400, 'Concert+One:wght@400'),
  youngserif: makeSerifFont('Young Serif', 'Young Serif', 400, 'Young+Serif:wght@400'),
  capriola: makeFont('Capriola', 'Capriola', 400, 'Capriola:wght@400'),
  lilitaone: makeFont('Lilita One', 'Lilita One', 400, 'Lilita+One:wght@400'),
  trocchi: makeSerifFont('Trocchi', 'Trocchi', 400, 'Trocchi:wght@400'),
  averiaseriflibre: makeSerifFont('Averia Serif Libre', 'Averia Serif Libre', 400, 'Averia+Serif+Libre:wght@400'),
  agbalumo: makeFont('Agbalumo', 'Agbalumo', 400, 'Agbalumo:wght@400'),
  bungee: makeFont('Bungee', 'Bungee', 400, 'Bungee:wght@400'),
  bebasneue: makeFont('Bebas Neue', 'Bebas Neue', 400, 'Bebas+Neue:wght@400'),

  // Vibrant body fonts
  bitter: makeSerifFont('Bitter', 'Bitter', 400, 'Bitter:wght@400'),
  syne: makeFont('Syne', 'Syne', 400, 'Syne:wght@400;800'),
  ibmplexmono: makeFont('IBM Plex Mono', 'IBM Plex Mono', 400, 'IBM+Plex+Mono:wght@400'),
  spacegrotesk: makeFont('Space Grotesk', 'Space Grotesk', 400, 'Space+Grotesk:wght@400'),
  spacemono: makeFont('Space Mono', 'Space Mono', 400, 'Space+Mono:wght@400'),
  silkscreen: makeFont('Silkscreen', 'Silkscreen', 400, 'Silkscreen:wght@400'),

  // Neutral heading fonts
  librebaskerville: makeSerifFont('Libre Baskerville', 'Libre Baskerville', 400, 'Libre+Baskerville:wght@400'),
  tenorsans: makeFont('Tenor Sans', 'Tenor Sans', 400, 'Tenor+Sans:wght@400'),
  marcellus: makeSerifFont('Marcellus', 'Marcellus', 400, 'Marcellus:wght@400'),
  alice: makeSerifFont('Alice', 'Alice', 400, 'Alice:wght@400'),
  neuton: makeSerifFont('Neuton', 'Neuton', 400, 'Neuton:wght@400'),
  newsreader: makeSerifFont('Newsreader', 'Newsreader', 400, 'Newsreader:wght@400'),
  ovo: makeSerifFont('Ovo', 'Ovo', 400, 'Ovo:wght@400'),

  // Neutral body fonts
  almarai: makeFont('Almarai', 'Almarai', 400, 'Almarai:wght@400'),
  pontanosans: makeFont('Pontano Sans', 'Pontano Sans', 400, 'Pontano+Sans:wght@400'),
  ptserif: makeSerifFont('PT Serif', 'PT Serif', 400, 'PT+Serif:wght@400'),

  // Modern fonts
  asap: makeFont('Asap', 'Asap', 400, 'Asap:wght@400;600'),
  sansita: makeFont('Sansita', 'Sansita', 400, 'Sansita:wght@400'),
  nunitosans: makeFont('Nunito Sans', 'Nunito Sans', 400, 'Nunito+Sans:wght@400;600'),
  comfortaa: makeFont('Comfortaa', 'Comfortaa', 400, 'Comfortaa:wght@400'),
  worksans: makeFont('Work Sans', 'Work Sans', 400, 'Work+Sans:wght@400'),
  rubik: makeFont('Rubik', 'Rubik', 400, 'Rubik:wght@400'),

  // Minimal fonts
  manrope: makeFont('Manrope', 'Manrope', 400, 'Manrope:wght@400;700'),
  poppins: makeFont('Poppins', 'Poppins', 400, 'Poppins:wght@400;600'),
  urbanist: makeFont('Urbanist', 'Urbanist', 400, 'Urbanist:wght@400;700'),
  instrumentserif: makeSerifFont('Instrument Serif', 'Instrument Serif', 400, 'Instrument+Serif:wght@400'),
  familjengrotesk: makeFont('Familjen Grotesk', 'Familjen Grotesk', 400, 'Familjen+Grotesk:wght@400'),
  arimo: makeFont('Arimo', 'Arimo', 400, 'Arimo:wght@400'),
  archivo: makeFont('Archivo', 'Archivo', 400, 'Archivo:wght@400;700'),
  gildadisplay: makeSerifFont('Gilda Display', 'Gilda Display', 400, 'Gilda+Display:wght@400'),
  oswald: makeFont('Oswald', 'Oswald', 400, 'Oswald:wght@400;700'),
  epilogue: makeFont('Epilogue', 'Epilogue', 400, 'Epilogue:wght@400;700'),

  // Adventurous fonts
  climatecrisis: makeFont('Climate Crisis', 'Climate Crisis', 400, 'Climate+Crisis:wght@400'),
  ultra: makeSerifFont('Ultra', 'Ultra', 400, 'Ultra:wght@400'),
  modak: makeFont('Modak', 'Modak', 400, 'Modak:wght@400'),
  goblinone: makeFont('Goblin One', 'Goblin One', 400, 'Goblin+One:wght@400'),
  delagothicone: makeFont('Dela Gothic One', 'Dela Gothic One', 400, 'Dela+Gothic+One:wght@400'),
  archivoblack: makeFont('Archivo Black', 'Archivo Black', 400, 'Archivo+Black:wght@400'),
  coiny: makeFont('Coiny', 'Coiny', 400, 'Coiny:wght@400'),
} as const

export default googleFonts
