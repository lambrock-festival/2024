// PageTemplate
import { getPageMD } from '@/utils/load-md';
import { PageTemplate } from '@/components/Templates';
// react
import { React, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import {StlViewer} from "react-stl-viewer";
import { OffCanvas } from '@/components/OffCanvas';
// style
import * as s from '@/styles/Sport.module.scss';
import * as style from '@/styles/Workshop.module.scss';
import 'animate.css';
// image 
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import campo from '@/public/images/campo.webp'
import LocandinaBasket from '@/public/images/LocandinaBasket.png'
import lupofalosx from '@/public/images/lupi-falo-neri-sx.png'
import lupofalodx from '@/public/images/lupi-falo-neri-dx.png'
const medaglia13D = '/2024/medaglia_1.stl'
const medaglia23D = '/2024/medaglia_2.stl'
const medaglia33D = '/2024/medaglia_3.stl'

const stilo1 = {
    position: 'relative',
    top: 20,
    left: 0,
    width: '20vw',
    height: '20vw',
}

const stilo2 = {
    position: 'relative',
    top: 120,
    left: 0,
    width: '20vw',
    height: '20vw',
}

const stiloSmall = {
    position: 'relative',
    top: 120,
    left: 0,
    width: '100vw',
    height: '100vw',
}

const stilo3 = {
    position: 'relative',
    top: 140,
    left: 0,
    width: '20vw',
    height: '20vw',
}

export default function Sport() {
    const workshopBoxRef = useRef(null);
    const workshopBox2Ref = useRef(null);
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);

    const onElementVisibleLeft = (entry) => {
        if (window.innerWidth > 768) {
            entry.target.classList.add('animate__animated', 'animate__slideInLeft');
        }
        entry.target.style.visibility = 'visible';
    };

    const onElementVisibleRight = (entry) => {
        if (window.innerWidth > 768) {
            entry.target.classList.add('animate__animated', 'animate__slideInRight');
        }
        entry.target.style.visibility = 'visible';
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === workshopBox2Ref.current || entry.target === textRef2.current) {
                            onElementVisibleRight(entry);
                        } else {
                            onElementVisibleLeft(entry);
                        }
                        observer.unobserve(entry.target);
                    }
                });
            }, {
            threshold: 0.5,
        });

        if (workshopBoxRef.current) {
            observer.observe(workshopBoxRef.current);
            workshopBoxRef.current.style.visibility = 'hidden';
        }

        if (textRef1.current) {
            observer.observe(textRef1.current);
            textRef1.current.style.visibility = 'hidden';
        }

        if (workshopBox2Ref.current) {
            observer.observe(workshopBox2Ref.current);
            workshopBox2Ref.current.style.visibility = 'hidden';
        }

        if (textRef2.current) {
            observer.observe(textRef2.current);
            textRef2.current.style.visibility = 'hidden';
        }

        return () => {
            if (workshopBoxRef.current) {
                observer.unobserve(workshopBoxRef.current);
            }

            if (textRef1.current) {
                observer.unobserve(textRef1.current);
            }

            if (workshopBox2Ref.current) {
                observer.unobserve(workshopBox2Ref.current);
            }

            if (textRef2.current) {
                observer.unobserve(textRef2.current);
            }
        };
    }, []);

    return (
        <>
            <PageTemplate>
                <Container className='mt-5 mb-5'>
                    <Row className='mt-5'>
                        <h1 className='d-flex justify-content-center animate__animated animate__slideInDown'>Sport</h1>
                        <p className='text-center'>
                            Grrrr!
                        </p>
                        <hr />
                    </Row>
                </Container>

                <Row className='m-2 mt-5 mb-5'>
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
                            src={LocandinaBasket}
                            alt="basket"
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

                <Container className='mt-5 mb-5'>
                    
                    <Row className='text-center mt-5 mb-5'>
                        <h2 className='mt-5'>LAMBRASKET</h2>
                        <Col sm={12}>
                            <p>
                                Unisciti a noi per la nuova edizione del torneo di basket a squadre! Un evento imperdibile dove tutti possono giocare e divertirsi. Immancabili le medaglie! Buona partita!
                            </p>
                            <OffCanvas 
                                cname={style.btn} 
                                url='https://docs.google.com/forms/d/1FXIENGQzKwtHGUbWR0mJxt3_D8XGxN_6MJE6qt40Dhk/viewform?edit_requested=true ' 
                                src='/2024/images/qrbasket.png'
                            />
                        </Col>
                    </Row>

                    <Row className=''>
                        <Col className='mb-2 d-flex justify-content-center align-items-center'>

                            {/* medaglia 2 3D */}
                            <StlViewer
                                className='d-none d-md-block'
                                shadows
                                url={medaglia23D}
                                modelProps={{ color: 'rgb(229,228,226)', scale: 150,  rotationX: 20, rotationY: 100, rotationZ: 50  }}
                                cameraRef
                                style={stilo2}
                                floorProps={{ gridWidth: 10, gridLength : 10 }}
                                
                            />

                            {/* medaglia 1 3D */}
                            <StlViewer
                                className='d-none d-md-block'
                                shadows
                                url={medaglia13D}
                                modelProps={{ color: 'rgb(181,166,66)', scale: 150,  rotationX: -150, rotationY: 50, rotationZ: 50, positionX: -5.5 }}
                                cameraRef
                                style={stilo1}
                                floorProps={{ gridWidth: 10, gridLength : 10 }}
                                orbitControls
                            />

                            {/* when small */}
                            <div className='d-md-none'>
                                {/* medaglia 1 3D */}
                                <StlViewer
                                    shadows
                                    url={medaglia13D}
                                    modelProps={{ color: 'rgb(181,166,66)', scale: 150,  rotationX: -150, rotationY: 50, rotationZ: 50, positionX: -5.5 }}
                                    cameraRef
                                    style={stiloSmall}
                                    floorProps={{ gridWidth: 10, gridLength : 10 }}
                                    orbitControls
                                />
                            </div>
                            
                            {/* medaglia 3 3D */}
                            <StlViewer
                                className='d-none d-md-block'
                                shadows
                                url={medaglia33D}
                                modelProps={{ color: 'rgb(169,91,14)', scale: 150, rotationX: 20, rotationY: 160, rotationZ: 50 }}
                                cameraRef
                                style={stilo3}
                                floorProps={{ gridWidth: 10, gridLength : 10 }}
                            />

                        </Col>
                    </Row>
                    
                    <Row className='text-center mt-5 mb-5'>
                        <h2 className='mt-5'>ITALIA-SPAGNA</h2>
                        <Col sm={12}>
                            <p>
                                La partita della UEFA, Italia-Spagna, sarà proiettata su un grande schermo al festival. Vieni a vivere l'emozione del calcio dal vivo con amici e appassionati! Non perdere l'occasione di tifare insieme per la tua squadra del cuore. Ti aspettiamo!
                            </p>
                        </Col>

                    </Row>

                </Container>

            </PageTemplate >
        </>
    );
}


export async function getStaticProps() {
    const data = getPageMD('workshop');
    return {
        props: {
            data,
        },
    };
}