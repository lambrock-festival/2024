// component
import { Countdown } from '@/components/Countdown';
import { GoogleMaps } from "@/components/GoogleMaps";
import { SocialBar } from "@/components/SocialBar";
import { Fontz } from "@/components/Fontz";
// next
import { useParallax } from "react-scroll-parallax";
import { React,  useEffect, useRef } from "react";
import Link from 'next/link';
/// bootstrap
import { Container, Col, Row } from 'react-bootstrap';
// template
import { Template } from '@/components/Templates';
import { getPageMD } from '@/utils/load-md';
// styles
import * as s from '@/styles/Index.module.scss';
import style from '@/styles/Home.module.scss';
import 'animate.css';
//image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import Lineup from '@/public/images/lineup.webp'
import Musica from '@/public/images/icons/musica.webp'
import WS from '@/public/images/icons/ws.webp'
import Cibo from '@/public/images/icons/cibo.webp'
import Palloncini from '@/public/images/Palloncini.png'
import Nuvole from '@/public/images/Cloud.png'
import Montagne from '@/public/images/Montagne.png'
import Mongolfiera from '@/public/images/Mongola.png'
import Gonfiabile from '@/public/images/LupoGonfiabile.png'
import Lupo from '@/public/images/Lupo.png'
import Basket from '@/public/images/Basket.png'
import Workshop from '@/public/images/WS.png'
import UEFA from '@/public/images/UEFA.png'
import Panino from '@/public/images/Panino.png'
import Colle from '@/public/images/Colle.png'
import Alcol from '@/public/images/Alcol.png'
import Locandina from '@/public/images/Locandina.png'

export default function Home({ data }) {
    const lineUpRefLeft = useRef(null);
    const lineUpRefRight = useRef(null);
    const workshopRefLeft = useRef(null);
    const workshopRefRight = useRef(null);
    const foodRefLeft = useRef(null);
    const foodRefRight = useRef(null);

    const onElementVisibleRight = (entry) => {
        if (window.innerWidth > 768) {
            entry.target.classList.add('animate__animated', 'animate__slideInRight');
        }
        entry.target.style.visibility = 'visible';
    };

    const onElementVisibleLeft = (entry) => {
        if (window.innerWidth > 768) {
            entry.target.classList.add('animate__animated', 'animate__slideInLeft');
        }
        entry.target.style.visibility = 'visible';
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (
                            entry.target === lineUpRefRight.current ||
                            entry.target === workshopRefRight.current ||
                            entry.target === foodRefRight.current
                        ) {
                            onElementVisibleRight(entry);
                        } else {
                            onElementVisibleLeft(entry);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (lineUpRefLeft.current) {
            observer.observe(lineUpRefLeft.current);
            lineUpRefLeft.current.style.visibility = 'hidden';
        }

        if (lineUpRefRight.current) {
            observer.observe(lineUpRefRight.current);
            lineUpRefRight.current.style.visibility = 'hidden';
        }

        if (workshopRefLeft.current) {
            observer.observe(workshopRefLeft.current);
            workshopRefLeft.current.style.visibility = 'hidden';
        }

        if (workshopRefRight.current) {
            observer.observe(workshopRefRight.current);
            workshopRefRight.current.style.visibility = 'hidden';
        }

        if (foodRefLeft.current) {
            observer.observe(foodRefLeft.current);
            foodRefLeft.current.style.visibility = 'hidden';
        }

        if (foodRefRight.current) {
            observer.observe(foodRefRight.current);
            foodRefRight.current.style.visibility = 'hidden';
        }

        return () => {
            if (lineUpRefLeft.current) {
                observer.unobserve(lineUpRefLeft.current);
            }

            if (lineUpRefRight.current) {
                observer.unobserve(lineUpRefRight.current);
            }

            if (workshopRefLeft.current) {
                observer.unobserve(workshopRefLeft.current);
            }

            if (workshopRefRight.current) {
                observer.unobserve(workshopRefRight.current);
            }

            if (foodRefLeft.current) {
                observer.unobserve(foodRefLeft.current);
            }

            if (foodRefRight.current) {
                observer.unobserve(foodRefRight.current);
            }
        };
    }, []);

    const target = useRef(null);

    const title = useParallax({
        speed: 20,
        targetElement: target.current,
    });

    const title2 = useParallax({
        speed: 20,
        targetElement: target.current,
    });

    const title3 = useParallax({
        speed: 20,
        targetElement: target.current,
    });

    const baloon = useParallax({
        speed: 200,
        targetElement: target.current,
    });

    const cloud = useParallax({
        speed: 50,
        targetElement: target.current,
    });

    const countdown = useParallax({
        speed: 130,
        targetElement: target.current,
    });
    
    const ws = useParallax({
        speed: 50,
        targetElement: target.current,
    });

    const music = useParallax({
        speed: 70,
        targetElement: target.current,
    });

    const food = useParallax({
        speed: 100,
        targetElement: target.current,
    });

    const sport = useParallax({
        speed: 70,
        targetElement: target.current,
    });
 
    return (
        <Template>
            <div
            ref={target}
            style={{ 
                maxWidth: '100%',
                width: '100vw',
                height: '858vh',
                overflow: 'hidden',
                position: 'relative',
                paddingRight: '20px',
            }}>
                <Container className='mt-5 text-center p-3'>


                    {/* title */}
                    <Row ref={title.ref} className=''>
                      <h1 className='d-flex justify-content-center animate__animated animate__slideInRight'>
                          <Fontz text="LAMBROCK è AMORE" />
                      </h1>
                    </Row>

                    {/* subtitle */}
                    <Row ref={title.ref} className='mt-2'>
                      <Col className='mb-5'>
                          <span> 4 giorni in festa, 4 notti da lup* </span>
                      </Col>
                    </Row>
                    
                    {/* mongola */}
                    <Row className="mt-5 position-fixed" style={{
                        top: '50vh',
                        left: '5vw',
                        zindex: '-1',
                    }}>
                        <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ order: 2, span: 8 }} lg={{ order: 2, span: 8 }} ref={workshopRefRight} className='mb-5'>
                          <ExportedImage src={Mongolfiera} alt="mongola" height={519} width={261} />
                        </Col>
                    </Row>

                    {/* balun */}
                    <Row  ref={baloon.ref} className="position-absolute"
                        style={{
                            top: '-100vh',
                            left: '25vw',
                            width: '100vw',
                            zindex: '1',
                    }}>
                        <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ order: 2, span: 8 }} lg={{ order: 2, span: 8 }} ref={workshopRefRight} className='mb-5'>
                          <ExportedImage src={Palloncini} alt="balun" height={617} width={411} />
                        </Col>
                    </Row>

                    {/* nuvole */}
                    <Row  ref={cloud.ref} className="position-absolute"
                        style={{
                            top: '50vh',
                            zindex: '3',
                    }}>
                        <Col ref={workshopRefRight} className='mb-5'>
                          <ExportedImage src={Nuvole} alt="nuvole" height={777} width={2933} />
                        </Col>
                    </Row>

                    {/* countdown */}
                    <div ref={countdown.ref} className="position-absolute"
                    style={{
                        top: '20vh',
                        left: '30vw',
                        zindex: '1'          
                    }}>
                        <h2 text="">NON STAI + NELLA PELLICCIA ?</h2>
                        <h4 className="text-center text-black">
                            MANCANO SOLO:
                        </h4>
                        <Countdown date="2024-06-20T18:00:00" />
                    </div>
                

                    {/* title 2 */}
                    <Row ref={title2.ref} className='position-absolute'
                    style={{
                        top: '200vh',
                        left: '30vw',
                        zindex: '1'          
                    }}>
                        <h1 className='d-flex justify-content-center animate__animated animate__slideInRight'>
                          <Fontz text="...e ANCHE..." />
                        </h1>
                    </Row>
                    
                    {/* workshop */}
                    <Row ref={ws.ref} className="mt-5 position-absolute" style={{
                        top: '210vh',
                        left: '30vw',
                    }}>
                        <Col xs={{ order: 1 }} sm={{ order: 1, span: 4 }} ref={workshopRefLeft} className='mt-5'>
                            <h2>Workshop</h2>
                            <div className={style.ExportedImage}>
                              <ExportedImage src={WS} alt="lupo-ws" width={128} height={128} />
                            </div>
                            <p>Lambrock è musica ma anche tanto altro. Come le attività che abbiamo progettato per over 18 o per famiglie, dove divertirti e goderti al massimo Lambrock Festivàl. Scopri tutti i workshop dedicati a te e progettati insieme a realtà del territorio: laboratori interattivi, torneo di basket e presentazioni di libri!
                            </p>
                            <Link href="/workshop" className={style.btn}>
                                Scopri
                            </Link>
                        </Col>
                        <Col xs={{ order: 1 }} sm={{ order: 2, span: 8 }} ref={workshopRefRight} className='mb-5'>
                          <ExportedImage src={Workshop} alt="lupo-workshop" width={972} height={635.25521} />
                        </Col>
                    </Row>

                    {/* musica */}
                    <Row ref={music.ref} className='mt-5 position-absolute' style={{
                        top: '300vh',
                        left: '30vw',
                    }}>
                        <Col xs={{ order: 1 }} sm={{ order: 2, span: 8 }} ref={lineUpRefLeft} className='mb-5'>
                          <ExportedImage src={Locandina} alt="lupo-band" width={600} height={850} />
                        </Col>
                        <Col ref={lineUpRefRight} sm={4} className='mt-5'>
                            <h2>Line-Up</h2>
                            <div className={style.ExportedImage}>
                                <ExportedImage src={Musica} alt="lupo-musica" width={128} height={128} zindex={-5}/>
                            </div>
                            <p> Il palco sarà messo a dura prova per la prima volta per ben 4 giorni di Lambrock-sound. Fino a sera Lambrock è musica: artist* di calibro nazionale, local band, indie rock, elettronica e party trash!
                            </p>
                            <Link href='/band' className={style.btn}>
                              Scopri
                            </Link>
                        </Col>
                    </Row>

                    {/* basket e calcio */}
                    <Row ref={sport.ref} className="mt-5 position-absolute" style={{
                        top: '420vh',
                        left: '30vw',
                    }}>
                        <Col xs={{ order: 1 }} sm={{ order: 1, span: 4 }} ref={workshopRefLeft} className='mt-5'>
                            <h2>Lambrasket & UEFA</h2>
                            <div className={style.ExportedImage}>
                              <ExportedImage src={Basket} alt="basket" width={128} height={128} />
                            </div>
                            <p>Preparati a una doppia dose di adrenalina con Lambrasket e con gli Azzurri! Assisti alle performance delle giovani promesse del basket in Brianza e, subito dopo, vivi tutte le emozioni della partita, Italia-Spagna, sul grande schermo. Non perderti questo appuntamento!</p>
                        </Col>
                        <Col xs={{ order: 1 }} sm={{ order: 2, span: 6 }} ref={workshopRefRight} className='mb-5'>
                          <ExportedImage src={UEFA} alt="uefa" width={1602} height={1605} />
                        </Col>
                    </Row>

                    {/* nuvole 2 */}
                    <Row  ref={cloud.ref} className="position-absolute"
                        style={{
                            top: '500vh',
                            zindex: '3',
                    }}>
                        <Col ref={workshopRefRight} className='mb-5'>
                          <ExportedImage src={Nuvole} alt="nuvole" height={777} width={2933} />
                        </Col>
                    </Row>

                    {/* title 3 */}
                    <Row ref={title3.ref} className='mt-5 position-absolute'
                    style={{
                        top: '520vh',
                        left: '10vw',
                        zindex: '1'          
                    }}>
                        <h1 className='mt-5 d-flex justify-content-center animate__animated animate__slideInRight'>
                          <Fontz text="FAME (o SETE) DA LUPI?" />
                        </h1>
                    </Row>

                    {/* cibo */}
                    <Row ref={food.ref} className='mt-5 position-absolute text-center' style={{
                        top: '620vh',
                        height: '100vh',
                        left: '30vw',
                        zindex: '1',
                    }}>
                        <Col sm={6} ref={foodRefLeft} className='mb-5'>
                            <ExportedImage src={Alcol} alt="vino" layout="responsive" />
                        </Col>
                        <Col ref={foodRefRight} sm={4} className='mt-5'>
                            <h2>Non cacciare da solo porta il branco</h2>
                            <div className={style.ExportedImage}>
                                <ExportedImage src={Panino} alt="panino" width={128} height={128} />
                            </div>
                            <p>Vieni a provare i nostri panini preparati con ingredienti a km 0, accompagnati da vini della zona e birre artigianali. Una combinazione perfetta per chi ama il buon cibo e le bevande autentiche.</p>
                            <Link href='/menu' className={style.btn}>
                              Scopri
                            </Link>
                        </Col>
                    </Row>

                    {/* nuvole 3 */}
                    <Row  ref={cloud.ref} className="position-absolute"
                        style={{
                            top: '750vh',
                            zindex: '3',
                    }}>
                        <Col ref={workshopRefRight} className='mb-5'>
                          <ExportedImage src={Nuvole} alt="nuvole" height={777} width={2933} />
                        </Col>
                    </Row>

                </Container>
            </div>
        </Template>
    );
}

export async function getStaticProps() {
    const data = getPageMD('home');
    return {
        props: {
            data,
        },
    };
}