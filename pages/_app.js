import '@/styles/globals.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ParallaxProvider } from 'react-scroll-parallax'
import localFont from 'next/font/local'
 
const inkTrapRegular = localFont({
    variable: '--inktrap-regular-font',
    src: [{
      path: '../styles/fonts/WhyteInktrap_Regular.otf',
      weight: '400',
      style: 'normal',
    }],
})

const inkTrapBold = localFont({
    variable: '--inktrap-bold-font',
    src: [{
        path: '../styles/fonts/WhyteInktrap_Bold.otf',
        weight: '400',
        style: 'normal',
    }]
})

const inkTrapBook = localFont({
    variable: '--inktrap-book-font',
    src: [{
        path: '../styles/fonts/WhyteInktrap_Book.otf',
        weight: '400',
        style: 'normal',
    }]
})

const lynoJean = localFont({
    variable: '--lyno-jean-font',
    src: [{
      path: '../styles/fonts/LynoJean.otf',
      weight: '400',
      style: 'normal',
    }],
})

const lynoUlys = localFont({
    variable: '--lyno-ulys-font',
    src: [{
      path: '../styles/fonts/LynoUlys.otf',
      weight: '400',
      style: 'normal',
    }],
})

const lynoWalt = localFont({
    variable: '--lyno-walt-font',
    src: [{
      path: '../styles/fonts/LynoWalt.otf',
      weight: '400',
      style: 'normal',
    }],
})

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='vertical'>
        <main className={`${inkTrapRegular.variable} ${inkTrapBold.variable} ${inkTrapBook.variable} ${lynoJean.variable} ${lynoUlys.variable} ${lynoWalt.variable}`}>
            <Component {...pageProps} />
        </main>
    </ParallaxProvider>
  )
}

export default MyApp