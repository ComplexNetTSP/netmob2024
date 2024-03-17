import localFont from 'next/font/local'
 
export const Atrament = localFont({
  variable: '--font-atrament',
  src: [
    {
      path: '../../public/fonts/Atrament/Atrament-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-SemiboldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Atrament/Atrament-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
})