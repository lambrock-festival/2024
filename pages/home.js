// template
import { Template } from '@/components/Templates';
import { getPageMD } from '@/utils/load-md';
// react
import { useEffect, useRef } from 'react';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// styles
import style from '@/styles/Home.module.scss';
import 'animate.css';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import workshop from '@/public/images/workshop.webp'
import lineup from '@/public/images/lineup.webp'
import food from '@/public/images/food.webp'
import ws from '@/public/images/icons/ws.webp'
import musica from '@/public/images/icons/musica.webp'
import cibo from '@/public/images/icons/cibo.webp'
import Link from 'next/link';

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

    return (
        <>
            <title>Lambrock Festival 2023</title>
            <Template>
                <video autoPlay muted loop id='myVideo' className={style.video}>
                    <source src='/2023/videos/lambrock22-aftermovie.mp4' type='video/mp4' />
                </video>

                <Container className='mt-5'>
                    <Row className='mt-5'>
                        <h1 className='d-flex justify-content-center animate__animated animate__slideInDown'>
                            Home
                        </h1>
                    </Row>
                    <Row className='mt-5'>
                        <Col className='mb-5 text-center'>
                            <p>
                                3 giorni di festa e divertimento, 3 notti da lup* indimenticabili
                            </p>
                        </Col>
                    </Row>
                    <hr />
                </Container>

                <Container className='mt-5'>
                    <Row className='mt-5'>
                        <Col sm={6} ref={lineUpRefLeft} className='mb-5'>
                            <ExportedImage src={lineup} alt="lupo-band" width={1080} height={720} />
                        </Col>
                        <Col ref={lineUpRefRight} sm={4} className='mt-5'>
                            <h2>Line-Up</h2>
                            <div className={style.ExportedImage}>
                                <ExportedImage src={musica} alt="lupo-musica" width={128} height={128} />
                            </div>
                            <p>
                                Due palchi - 1st main stage e 2nd stage floor - per 3 giorni di Lambrock sound. Ogni giorno, dal pomeriggio e per tutta la sera Lambrock è musica: artist* di calibro nazionale, local band, indie rock, elettronica e party trash!
                            </p>
                            <Link href='/band' className={style.btn}>
                                Scopri
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col xs={{ order: 2 }} sm={{ order: 1, span: 4 }} ref={workshopRefLeft} className='mt-5'>
                            <h2>Workshop</h2>
                            <div className={style.ExportedImage}>
                                <ExportedImage src={ws} alt="lupo-ws" width={128} height={128} />
                            </div>
                            <p>
                                Lambrock è musica, ma anche tanto altro. Come le attività che abbiamo progettato per over 18 o per famiglie, dove divertirti e goderti al massimo Lambrock Festivàl. Scopri tutti i workshop dedicati a te e progettati insieme a realtà del territorio: laboratori interattivi, torneo di basket e presentazioni di libri!
                            </p>
                            <Link href="/workshop" className={style.btn}>
                                Scopri
                            </Link>
                        </Col>
                        <Col xs={{ order: 1 }} sm={{ order: 2, span: 8 }} ref={workshopRefRight} className='mb-5'>
                            <ExportedImage src={workshop} alt="lupo-workshop" width={1080} height={720} />
                        </Col>
                    </Row>

                    <Row className='mt-5'>
                        <Col sm={6} ref={foodRefLeft} className='mb-5'>
                            <ExportedImage src={food} alt="lupo-cibo" layout="responsive" />
                        </Col>
                        <Col ref={foodRefRight} sm={4} className='mt-5'>
                            <h2>FOOD & DRINK</h2>
                            <div className={style.ExportedImage}>
                                <ExportedImage src={cibo} alt="lupo-cibo" width={128} height={128} />
                            </div>
                            <p>
                                La selezione di birre artigianali che stavi aspettando, e il junk food più sano che c'è: scopri il nuovo menu Lambrock 23, una proposta adatta a tutte le esigenze alimentari, con prodotti di stagione provenienti da fornitori locali.
                            </p>
                            <Link href='/menu' className={style.btn}>
                                Scopri
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Template>
        </>
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