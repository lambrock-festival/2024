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
            <PageTemplate>
                <h1 className='d-flex justify-content-center mb-0 mt-5 animate__animated animate__slideInDown'>SPORT</h1>
                <Container className='mt-5'>
                    <Row className='mt-5 text-center'>
                        <p className='text-center'>Grrr</p>
                        <hr />
                    </Row>
                </Container>
                <Row className='m-2 mt-5 mb-5 text-align-center'>
                    <Col sm={4} className='d-none d-md-block' ref={col1Ref}>
                        <ExportedImage
                            src={lupofalosx}
                            layout='responsive'
                            alt='LupoFaloSX'
                            className={s.lupifalocol}
                        />
                    </Col>
                    <Col sm={4} className='mt-5' ref={col2Ref}>
                        <ExportedImage
                            src={LocandinaBasket}
                            alt="basket"
                            layout='responsive'
                            priority
                        />
                        {/* <Book /> */}
                    </Col>
                    <Col sm={4} className='d-none d-md-block' ref={col3Ref}>
                        <ExportedImage
                            src={lupofalodx}
                            layout='responsive'
                            alt='LupoFaloSX'
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