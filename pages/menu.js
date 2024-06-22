// template
import { getPageMD } from '@/utils/load-md';
import { PageTemplate } from '@/components/Templates';
// style
import * as s from '@/styles/Menu.module.scss';
import 'animate.css/animate.min.css';
//react 
import { useEffect, useRef } from 'react';
// bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import LocandinaMenu from '@/public/images/LocandinaMenu.png'
import lupofalosx from '@/public/images/lupi-falo-neri-sx.png'
import lupofalodx from '@/public/images/lupi-falo-neri-dx.png'
import qr from '@/public/images/qr.jpg'
import borraccia from '@/public/images/borraccia.webp'

export default function Menu({ data }) {
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
                {/* <div className='mb-5' style={{
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
                </div> */}
                <h1 className='d-flex justify-content-center mb-0 mt-5 animate__animated animate__slideInDown'>MENU DA LUP*</h1>
                <Container className='mt-5'>
                    <Row className='mt-5 text-center'>
                        <p>
                            Cosa bolle in pentola? Gustati il menù più lupesco della brianza: street food per eccellenza, con tutta la bontà dei prodotti della nostra tradizione locale. Una selezione di piatti e sfiziosità in stile lambrock, per sostenere l'artigianato alimentare del territorio.
                        </p>
                        {/* <ReactMarkdown>{data.content}</ReactMarkdown> */}
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
                            src={LocandinaMenu}
                            alt="menu"
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
                <Container>
                    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
                        <Col sm={6} className='mt-5'>
                            <h2 className='text-upper text-md-end'>Acqua gratis</h2>
                            <div className='d-flex'>
                                <p className='text-md-end'>
                                    L'acqua è il bene più prezioso, per questo vogliamo dissetarci senza inquinare e plastic free: da Lambrock Féstival puoi acquistare una borraccia con il logo del festival e riempirla quante volte vuoi ai nostri dispenser di acqua fresca, senza pagare. 100% gratis, 100% sostenibile.
                                </p>
                            </div>
                        </Col>
                        <Col sm={6} className='mb-5 mt-5'>
                            <ExportedImage
                                src={borraccia}
                                alt="acqua"
                                layout="responsive"
                            />
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
                        <Col sm={6} className='mb-5 mt-5'>
                            <ExportedImage
                                src={qr}
                                alt="qr"
                                layout="responsive"
                            />
                        </Col>
                        <Col sm={6} className='mt-5'>
                            <h2 className='text-upper text-md-end'>Ordina online</h2>
                            <div className='d-flex'>
                                <p className='text-md-end'>
                                    Basta code, file e trenini per ordinare il tuo menu. Ordina il tuo pasto e la tua bevanda con l'app e consumali in qualsiasi momento.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </PageTemplate >
        </>
    );
}

export async function getStaticProps() {
    const data = getPageMD('menu');
    return {
        props: {
            data,
        },
    };
}
