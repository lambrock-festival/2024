/*
    TODO: 
        togliere lupi qui e anche ws
        rinpicciolire home
        aggiungere animazioni mancanti
        convertire ultime foto in webp
*/
// PageTemplate
import { getPageMD } from '@/utils/load-md';
import { PageTemplate } from '@/components/Templates';
// style
import * as s from '@/styles/Band.module.scss';
// bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import LocandinaBand from '@/public/images/Locandina.png'
import lupofalosx from '@/public/images/lupi-falo-neri-sx.png'
import lupofalodx from '@/public/images/lupi-falo-neri-dx.png'
// artists
import Partners from '@/components/Partner/Partner';
// image
import rtv from '@/public/images/artisti/rtv.png'
import itmi from '@/public/images/artisti/itmi.png'
import bettercallsavnko from '@/public/images/artisti/bettercallsavnko.png'
import cacaomental from '@/public/images/artisti/cacaomental.png'
import twerkit from '@/public/images/artisti/twerkit.png'
import calypsosilentdisco from '@/public/images/artisti/calypsosilentdisco.png'
import calypsosilentdisco2 from '@/public/images/artisti/calypsosilentdisco2.png'
import ellen from '@/public/images/artisti/ellen.png'
import giovannipedersini from '@/public/images/artisti/giovannipedersini.png'
import gliocchideglialtri from '@/public/images/artisti/gliocchideglialtri.png'
import rumba from '@/public/images/artisti/rumba.png'
import vosm from '@/public/images/artisti/vosm.png'
import weavers from '@/public/images/artisti/weavers.png'
import xmary from '@/public/images/artisti/xmary.png'
import livepainting from '@/public/images/artisti/livepainting.png'

export default function Band({ data }) {
    const partners = [
        { name: 'itmi', logo: itmi, width: 500, height: 500 },
        { name: 'rtv', logo: rtv, width: 500, height: 500 },
        { name: 'bettercallsavnko', logo: bettercallsavnko, width: 500, height: 500 },
        { name: 'cacaomental', logo: cacaomental, width: 500, height: 500 },
        { name: 'twerkit', logo: twerkit, width: 500, height: 500 },
        { name: 'calypsosilentdisco', logo: calypsosilentdisco, width: 500, height: 500 },
        { name: 'calypsosilentdisco2', logo: calypsosilentdisco2, width: 500, height: 500 },
        { name: 'ellen', logo: ellen, width: 500, height: 500 },
        { name: 'giovannipedersini', logo: giovannipedersini, width: 500, height: 500 },
        { name: 'gliocchideglialtri', logo: gliocchideglialtri, width: 500, height: 500 },
        { name: 'rumba', logo: rumba, width: 500, height: 500 },
        { name: 'vosm', logo: vosm, width: 500, height: 500 },
        { name: 'weavers', logo: weavers, width: 500, height: 500 },
        { name: 'xmary', logo: xmary, width: 500, height: 500 },
        { name: 'livepainting', logo: livepainting, width: 500, height: 500 },
    ];
    return (
        <>
            <PageTemplate>
                {/* <div className='mb-5' style={{
                    position: 'relative',
                    height: '75vh',
                    '@media (maxWidth: 768px)': {
                        height: '55vh',
                    },
                }}>
                    <ExportedImage
                        src={copertina}
                        alt="band"
                        layout='fill'
                        objectFit='cover'
                        priority
                        style={{ zindex: -1 }}
                    />
                </div> */}
                <Container className='mt-5  '>
                    <Row className='mt-5 text-align-center'>
                        <h1 className='text-center animate__animated animate__slideInDown'>
                            LINE UP
                        </h1>
                        <p className='text-center'>
                            Live music, artist* internazional*, local bands e dj set: 3 giorni di musica no stop!
                        </p>
                        <hr />
                    </Row>
                </Container>
                <Row className='m-2 mt-5 text-align-center'>
                    <Col sm={4}>
                        <ExportedImage
                            src={lupofalosx}
                            layout='responsive'
                            alt='LupoFaloSX'
                            className={s.lupifalocol}
                        />
                    </Col>
                    <Col sm={4} className='mt-5'>
                        <ExportedImage
                            src={LocandinaBand}
                            alt="band"
                            layout='responsive'
                        />
                    </Col>
                    <Col sm={4} className='mt-5'>
                        <ExportedImage
                            src={lupofalodx}
                            layout='responsive'
                            alt='LupoFaloDX'
                            className={s.lupifalocol}
                        />
                    </Col>
                </Row>


                <Container>
                    <Row className='text-center mb-5'>
                        <h2 className='mt-5'>SILENT DISCO</h2>
                        <Col sm={12}>
                            <p className={s.p}>
                                Di sera, quando anche i lup* vanno a dormire, a Lambrock continua la festa! Venerdì 21 e Sabato 22 dalle ore 00.00 si scatenano le danze più pazze e silenziose che ci siano: cuffie sintonizzate sulla tua frequenza preferita e 3 dj che sfidano a colpi di hit-trash-ballatone!
                            </p>
                        </Col>

                    </Row>
                </Container>

                {/* Carosello BAND */}
                <Row className='m-2 mt-5'>
                    <Partners className='mt-5' partners={partners} />
                </Row>

            </PageTemplate >
        </>
    );
}

export async function getStaticProps() {
    const data = getPageMD('band');
    return {
        props: {
            data,
        },
    };
}

/* 
import { getPageMD } from '../utils/load-md';
import ReactMarkdown from 'react-markdown';
import { PageTemplate } from '../components/PageTemplates';
import { Col, Container, Row } from 'react-bootstrap';
import * as s from '../styles/Band.module.scss';

export default function Band({ data }) {

    const schedule = [
        {
            day: {
                date: 'Venerdì 15',
                artists: [
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                ]
            },
        },
        {
            day: {
                date: 'Sabato 16',
                artists: [
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                ],
            },
        },
        {
            day: {
                date: 'Domenica 17',
                artists: [
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                    {
                        name: 'iFinnegans',
                        spotifyId: '2rrjc6ARdFy4OigHtVsL7X?utm_source=generator'
                    },
                ],
            },
        },
    ];

    const columns = (
        <>
            {schedule.map((item, index) => (
                <Col sm={4} key={`col-${index}`}>
                    <h1 className='mt-5' key={`header-${index}`}>{item.day.date}</h1>
                    <ul key={`ul-${index}`}>
                        {item.day.artists.map((artist, artistIndex) => (
                            <li key={`${index}-${artistIndex}`} className={s.li}>
                                <h3 key={`name-${artistIndex}`}>{artist.name}</h3>
                                <button className={s.btn} data-spotify-id={artist.spotifyId} key={`button-${artistIndex}`}>
                                    <div id='embed-iframe' className={s.embed_iframe}>
                                        <iframe
                                            src={`https://open.spotify.com/embed/artist/${artist.spotifyId}`}
                                            width='600'
                                            height='100'
                                            frameBorder='0'
                                            allowtransparency='true'
                                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                                            loading="lazy"
                                            key={`iframe-${artistIndex}`}
                                        ></iframe>
                                    </div>
                                </button>
                            </li>
                        ))}
                    </ul>
                </Col>
            ))}
        </>
    );

    return (
        <PageTemplate>
            <img
                src='/2023/lupo_vettoriale_bianco-su-nero.svg'
                alt='Lupo'
                className={s.img}
            />
            <Container className='mt-5'>
                <Row className='m-0 mt-5'>
                    <Col>
                        <ReactMarkdown>{data.content}</ReactMarkdown>
                        <hr />
                        <img
                            src='/2023/lupo_vettoriale_bianco-su-nero.svg'
                            alt='Lupo'
                            className={s.img}
                        />
                    </Col>
                </Row>
            </Container>
            <Container className='mb-5'>
                <Row>
                    {columns}
                </Row>
                <img
                    src='/2023/lupo_vettoriale_bianco-su-nero.svg'
                    alt='carosello'
                    className={s.img}
                />
            </Container>
            <img
                src='/2023/lupo_vettoriale_bianco-su-nero.svg'
                alt='Lupo'
                className={s.img}
            />
        </PageTemplate>
    );
} 
*/

/* 
    useEffect(() => {
        // eslint-disable 
        (function () {
            // var scriptUrl = 'https://open.spotifycdn.com/cdn/build/embed-iframe-api-v1.c3632ddf.js';
            var scriptUrl = 'js/lib/spotify.js';
            var host = 'https://open.spotify.com';
            try {
                var ttPolicy = window.trustedTypes.createPolicy('spotify-embed-api', {
                    createScriptURL: function (x) {
                        return x;
                    },
                });
                scriptUrl = ttPolicy.createScriptURL(scriptUrl);
            } catch (e) { }

            if (!window.SpotifyIframeConfig) {
                window.SpotifyIframeConfig = {};
            }
            SpotifyIframeConfig.host = host;

            if (SpotifyIframeConfig.loading) {
                console.warn('The Spotify Iframe API has already been initialized.');
                return;
            }
            SpotifyIframeConfig.loading = 1;

            var a = document.createElement('script');
            a.type = 'text/javascript';
            a.id = 'spotify-iframeapi-script';
            a.src = scriptUrl;
            a.async = true;
            var c = document.currentScript;
            if (c) {
                var n = c.nonce || c.getAttribute('nonce');
                if (n) a.setAttribute('nonce', n);
            }
            var b = document.getElementsByTagName('script')[0];
            b.parentNode.insertBefore(a, b);
        })();
        if (typeof window !== 'undefined') {
            window.onSpotifyIframeApiReady = (IFrameAPI) => {
                let element = document.getElementById('embed-iframe');
                let options = {
                    uri: 'spotify:artist:2rrjc6ARdFy4OigHtVsL7X?si=r-lyajiARZKApzhHqoq-CQ',
                    width: '60%',
                    //height: '700',
                };
                let callback = (EmbedController) => {
                    document.querySelectorAll('ul#episodes > li > button').forEach(
                        episode => {
                            episode.addEventListener('click', () => {
                                EmbedController.loadUri(episode.dataset.spotifyId)
                            });
                        },
                    );
                };
                IFrameAPI.createController(element, options, callback);
            };
        }
    }, []); 
*/