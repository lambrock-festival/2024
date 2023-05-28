// template
import { Template } from '@/components/Templates';
import { getPageMD } from '@/utils/load-md';
// react
import { useEffect, useRef } from 'react';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// styles
// import style from '@/styles/Associazione.module.scss';
import 'animate.css';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import copertina from '@/public/images/associazione-copertina.jpg'
import storia from '@/public/images/storia.jpg'
import maniPiante from '@/public/images/mani-piante.jpg'
import valori from '@/public/images/valori.jpg'

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

export default function Associazione({ data }) {
    const storiaRefLeft = useRef(null);
    const storiaRefRight = useRef(null);
    const greenRefLeft = useRef(null);
    const greenRefRight = useRef(null);
    const valoriRefLeft = useRef(null);
    const valoriRefRight = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (
                            entry.target === storiaRefRight.current ||
                            entry.target === greenRefRight.current ||
                            entry.target === valoriRefRight.current
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

        if (storiaRefLeft.current) {
            observer.observe(storiaRefLeft.current);
            storiaRefLeft.current.style.visibility = 'hidden';
        }

        if (storiaRefRight.current) {
            observer.observe(storiaRefRight.current);
            storiaRefRight.current.style.visibility = 'hidden';
        }

        if (greenRefLeft.current) {
            observer.observe(greenRefLeft.current);
            greenRefLeft.current.style.visibility = 'hidden';
        }

        if (greenRefRight.current) {
            observer.observe(greenRefRight.current);
            greenRefRight.current.style.visibility = 'hidden';
        }

        if (valoriRefLeft.current) {
            observer.observe(valoriRefLeft.current);
            valoriRefLeft.current.style.visibility = 'hidden';
        }

        if (valoriRefRight.current) {
            observer.observe(valoriRefRight.current);
            valoriRefRight.current.style.visibility = 'hidden';
        }

        return () => {
            if (storiaRefLeft.current) {
                observer.unobserve(storiaRefLeft.current);
            }

            if (storiaRefRight.current) {
                observer.unobserve(storiaRefRight.current);
            }

            if (greenRefLeft.current) {
                observer.unobserve(greenRefLeft.current);
            }

            if (greenRefRight.current) {
                observer.unobserve(greenRefRight.current);
            }

            if (valoriRefLeft.current) {
                observer.unobserve(valoriRefLeft.current);
            }

            if (valoriRefRight.current) {
                observer.unobserve(valoriRefRight.current);
            }
        };
    }, []);

    return (
        <>
            <Template>
                <div className='mb-5' style={{
                    position: 'relative', height: '75vh', '@media (maxWidth: 768px)': {
                        height: '55vh',
                    },
                }}>
                    <ExportedImage
                        src={copertina}
                        alt="storia"
                        layout='fill'
                        objectFit='cover'
                        priority
                        style={{ zIndex: -1 }}
                    />
                </div>

                <Container className='mt-5'>
                    <Row className='mt-5'>
                        <h1 className='mt-5 d-flex justify-content-center animate__animated animate__slideInDown'>LAMBROCK È AMORE</h1>
                    </Row>
                </Container>

                <Container className='mt-5'>

                    <Row className='mt-5 d-flex align-items-center justify-content-center'>
                        <Col sm={6} ref={storiaRefLeft} className='mt-5 mb-5'>
                            <ExportedImage
                                src={storia}
                                alt="storia"
                                layout="responsive"
                            />
                        </Col>
                        <Col sm={6} ref={storiaRefRight} className='mt-5 mb-5'>
                            <h2 className='text-upper'>Le notti da lup*</h2>
                            <div className='d-flex'>
                                <h4 style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'upright',
                                    marginLeft: '10px',
                                    marginRight: '10px'
                                }}>Storia</h4>
                                <p className=''>Lambrock Festivàl nasce nel 2012, da un progetto di Associazione Culturale MondoDelleuoVa: creare un evento gratuito in Brianza dedicato a chi ama la musica live, e finanziare la ristrutturazione di due sale prove ad uso pubblico. Un progetto ambizioso e sostenuto esclusivamente da volontar*, che negli anni si è trasformato: dalle prime edizioni al campo sportivo comunale di Lambrugo alla nuova location di Albese con Cassano, dalle serate indie-local alle notti da lup*. Edizione dopo edizione, Lambrock ha dato spazio a chi ha voluto cantare, condividere e raccontarsi, anche in modalità diverse da quelle musicali, aggiungendo al weekend di festa una postazione per bancarelle di realtà locali, workshop interattivi e presentazioni di libri.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        <Col xs={12} sm={6} className="mt-5 order-2 order-sm-1" ref={greenRefRight}>
                            <h2 className='text-upper text-end'>Festa-ricicla-festa</h2>
                            <div className='d-flex'>
                                <p className='text-end'>Lambrock è persone e territorio, per questo è un festival sostenibile! Acqua gratis per riempire la tua borraccia, posate&food package 100% plastic free e solo materiali riciclabili, per goderti Lambrock nel pieno rispetto dell'ambiente. Da sempre abbiamo a cuore le tematiche legate alla sostenibilità, soprattutto quelle che ci riguardano direttamente. Le novità green di quest'anno? Un'offerta food con ingredienti di stagione e di provenienza locale, e l'iniziativa social Lambrock Car Sharing, per minimizzare l'impatto delle emissioni di CO2 sul territorio.</p>
                                <h4 style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'upright',
                                    marginLeft: '10px',
                                    marginRight: '10px'
                                }}>green</h4>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} className="mb-5 order-1 order-sm-2" ref={greenRefLeft}>
                            <ExportedImage
                                src={maniPiante}
                                alt="sostenibilità"
                                layout="responsive"
                            />
                        </Col>
                    </Row>

                    <Row className=' d-flex align-items-center justify-content-center'>
                        <Col sm={6} ref={valoriRefLeft} className='mt-5 mb-5'>
                            <ExportedImage
                                src={valori}
                                alt="valori"
                                layout="responsive"
                            />
                        </Col>
                        <Col sm={6} ref={valoriRefRight} className='mt-5 mb-5'>
                            <h2 className='text-upper'>Il festival di tutt*</h2>
                            <div className='d-flex'>
                                <h4 style={{
                                    writingMode: 'vertical-rl',
                                    textOrientation: 'upright',
                                    marginLeft: '10px',
                                    marginRight: '10px'
                                }}>Valori</h4>
                                <p className=''>
                                    Lambrock è il festival di tutt*, lambrock è amore. Un evento nato per riunire le persone e le realtà del territorio comasco, dove ognun* possa sentirsi liber* di essere sé stess*. L'inclusività sociale é un valore in cui crediamo e che abbiamo a cuore, per questo da Lambrock puoi partecipare a laboratori e momenti di confronto: per conoscere punti di vista diversi, per scoprire, e per conoscere nuov* amic*!
                                </p>
                            </div>
                        </Col>
                    </Row>

                </Container>

            </Template >
        </>
    );
}

export async function getStaticProps() {
    const data = getPageMD('associazione');
    return {
        props: {
            data,
        },
    };
}