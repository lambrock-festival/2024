// template
import { getPageMD } from '@/utils/load-md';
import { Template } from '@/components/Templates';
// style
import * as s from '@/styles/Band.module.scss';
import 'animate.css/animate.min.css';
//react 
import { useEffect, useRef } from 'react';
// bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import locandinaBand from '@/public/images/locandina-band.webp'
import lupofalosx from '@/public/images/lupi-falo-neri-sx.webp'
import lupofalodx from '@/public/images/lupi-falo-neri-dx.webp'
import copertina from '@/public/images/bandcopertina.webp'
// artists
import Partners from '@/components/Partner/Partner';
import meg from '@/public/images/artisti/meg.webp'
import crema from '@/public/images/artisti/crema.webp'
import latigre from '@/public/images/artisti/latigre.webp'
import hornytoorinchos from '@/public/images/artisti/hornytoorinchos.webp'
import twerkit from '@/public/images/artisti/twerkit.webp'
import genericanimal from '@/public/images/artisti/genericanimal.webp'
import delicottero from '@/public/images/artisti/delicottero.webp'
import aftersalsa from '@/public/images/artisti/aftersalsa.webp'
import cheriachre from '@/public/images/artisti/cheriachre.webp'
import montag from '@/public/images/artisti/montag.webp'

export default function Band({ data }) {
    const partners = [
        { name: 'meg', logo: meg, width: 500, height: 500 },
        { name: 'crema', logo: crema, width: 500, height: 500 },
        { name: 'latigre', logo: latigre, width: 500, height: 500 },
        { name: 'hornytoorinchos', logo: hornytoorinchos, width: 500, height: 500 },
        { name: 'twerkit', logo: twerkit, width: 500, height: 500 },
        { name: 'genericanimal', logo: genericanimal, width: 500, height: 500 },
        { name: 'delicottero', logo: delicottero, width: 500, height: 500 },
        { name: 'aftersalsa', logo: aftersalsa, width: 500, height: 500 },
        { name: 'cheriachre', logo: cheriachre, width: 500, height: 500 },
        { name: 'montag', logo: montag, width: 500, height: 500 },
    ];
    
    const onElementVisibleLeft = (entry) => {
        entry.target.classList.add('animate__animated', 'animate__slideInLeft');
        entry.target.style.visibility = 'visible';
    };
    
    const onElementVisibleRight = (entry) => {
        entry.target.classList.add('animate__animated', 'animate__slideInRight');
        entry.target.style.visibility = 'visible';
    };
    
    const onElementVisibleUp = (entry) => {
        entry.target.classList.add('animate__animated', 'animate__slideInUp');
        entry.target.style.visibility = 'visible';
    };
    
    const col1Ref = useRef(null);
    const col2Ref = useRef(null);
    const col3Ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === col1Ref.current) {
                            onElementVisibleLeft(entry);
                        } else if (entry.target === col2Ref.current) {
                            onElementVisibleUp(entry);
                        } else if (entry.target === col3Ref.current) {
                            onElementVisibleRight(entry);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (col1Ref.current) {
            observer.observe(col1Ref.current);
            col1Ref.current.style.visibility = 'hidden';
        }

        if (col2Ref.current) {
            observer.observe(col2Ref.current);
            col2Ref.current.style.visibility = 'hidden';
        }

        if (col3Ref.current) {
            observer.observe(col3Ref.current);
            col3Ref.current.style.visibility = 'hidden';
        }

        return () => {
            if (col1Ref.current) {
                observer.unobserve(col1Ref.current);
            }

            if (col2Ref.current) {
                observer.unobserve(col2Ref.current);
            }

            if (col3Ref.current) {
                observer.unobserve(col3Ref.current);
            }
        };
    }, []);

    return (
        <>
            <Template>
                <div className='mb-5' style={{
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
                        style={{ zIndex: -1 }}
                    />
                </div>
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
                    <Col sm={4} className="d-none d-md-block" ref={col1Ref}>
                        <ExportedImage
                            src={lupofalosx}
                            layout='responsive'
                            alt='LupoFaloSX'
                            className={s.lupifalocol}
                        />
                    </Col>
                    <Col sm={4} className='mt-5' ref={col2Ref}>
                        <ExportedImage
                            src={locandinaBand}
                            alt="locandina"
                            layout='responsive'
                        />
                    </Col>
                    <Col sm={4} className='mt-5 d-none d-md-block' ref={col3Ref}>
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
                                Di sera, quando anche i lup* vanno a dormire, a Lambrock continua la festa! Venerdì 16 e sabato 17 dalle ore 00.00 si scatenano le danze più pazze e silenziose che ci siano: cuffie sintonizzate sulla tua frequenza preferita e 3 dj che sfidano a colpi di hit-trash-ballatone!
                            </p>
                        </Col>

                    </Row>
                </Container>

                {/* Carosello BAND */}
                <Row className='m-2 mt-5'>
                    <Partners className='mt-5' partners={partners} />
                </Row>

            </Template >
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