// PageTemplate
import { getPageMD } from '@/utils/load-md';
import { PageTemplate } from '@/components/Templates';
// react
import { useEffect, useRef } from 'react';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// style
import * as style from '@/styles/Workshop.module.scss';
import 'animate.css';
// image 
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import workshopBox2 from '@/public/images/xilo.jpg'
import workshopBox from '@/public/images/lemat.jpg'
import { OffCanvas } from '@/components/OffCanvas';
import Partners from '@/components/Partner/Partner';

export default function Workshop({ data }) {
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

    const partners = [
        {
            name: 'XILOGRAFIA',
            copy: 'Sfogate sul legno le vostre peggiori fantasie! La xilografia è una tecnica d’incisione a rilievo su legno, per riprodurre a stampa, su materiali diversi, disegni, motivi decorativi e caratteri incisi. Con Cesare Tarma e Simone Elli incisore e pittore.'
        },
        {
            name: 'OPIFICIO IMAGINARIUM',
            copy: 'Laboratorio di fiori origami. Dedicato a ragazzə e adulti, a partire dai 14 anni. Impara a piegare alcuni tra i fiori classici della tradizione origami, per poi comporre un piccolo bouquet. Costo 15 euro materiali compresi',
        },
        {
            name: 'TALK: PERSONE RECLUSE',
            copy: 'I volontari del NAGA forniscono assistenza sanitaria, legale e sociale gratuita a stranieri irregolari. Nel carcere, sono tra i più vulnerabili. "Al di là di quella porta" rivela abusi e discriminazioni nei CPR, dove persone trattenute per illeciti amministrativi affrontano misure disumane e sproporzionate.',
        },        
        {
            name: 'SCRATCH ART',
            copy: "Unisciti a noi per un'esperienza artistica indimenticabile! Bambini di tutte le età si divertiranno a creare e disegnare su una magica superficie di pastelli a cera e inchiostro nero. Grattando via il nero, scopriranno i colori nascosti sotto. Divertimento assicurato per soli 2€!"
        },
        {
            name: 'LABORATORIO DI TAROCCHI',
            copy: 'Il laboratorio sui Tarocchi di Marsiglia è un’esperienza unica. Non è una semplice conferenza o una presentazione didascalica. L’obiettivo è coinvolgere i partecipanti in un’immersione profonda nell’energia e nelle vibrazioni dei Tarocchi. Scoprirai le caratteristiche principali di questo strumento attraverso un’esperienza intensa, leggera e appassionante. Un’occasione imperdibile per conoscere il Tarot in modo autentico e coinvolgente.'
        },
        {
            name: 'INCISIONE POPOLARE',
            copy: "'Cresciuta tra sarte e falegnami, ho imparato le antiche e preziose tecniche dell’incisione orafa e ora desidero condividerle con voi come forma di espressione creativa. imparerete a incidere su una lastrina in ottone con il bulino, e personalizzerete un ciondolo in argento che potrete conservare. Materiali forniti dall'insegnante. Portate occhiali e lenti di ingrandimento. Se vuoi incidere un gioiello personale (in bronzo, ottone, rame, argento o oro) portalo con te! Costo: 15€ a testa + 8€ per il ciondolo in argento."
        },
        {
            name: "C'ERA UNA STAMPA",
            copy: 'Raccontare una storia, rappresentarla in forma di immagine, tagliare e stampare su una tua maglia a tinta unita la tua immaginazione. Costo: 5€'
        },
        {
            name: "A RITMO DI LUNA",
            copy: "In ventre di Luna, sussurr' di conchiglia. Sbatte e percote il motore perpetuo. Dialettica danza d'argento vite. Ulula il Deserto. Cerchio di scoperta e condivisione sul ciclo mestruale.  Il laboratorio tenuto dai relatori Anna Mottinelli e Claudia Araldi, ostetriche libere professioniste della Casa Maternità La Quercia. "
        },
        {
            name: "ARTE INCLUSIVA",
            copy: "Partecipa al nostro laboratorio creativo, un'occasione di incontro e inclusione. Realizzeremo pali/testimoni rivestiti a mosaico, simboli dell'arte inclusiva. Aperto a tutti, indipendentemente da età, provenienza, orientamento o abilità.Miglioriamo la qualità di vita delle persone adulte con autismo, abilitando e creando contesti socio-assistenziali e psicoeducativi."
        },
        {
            name: 'CIANOTIPIE FLOREALI',
            copy: 'Grazie alla cianotipia, antico metodo di stampa fotografica, nato proprio per creare i libri botanici, scopriamo cosa e quali sono le specie nettarifere: un laboratorio organizzato da "AL LÖCH" divertente, formativo, pern scoprire i segreti nascosti dei nostri prati.'
        },
        {
            name: 'ERBARI FANTASTICI',
            copy: 'Con gli esperti botanici del "AL LÖCH" scopriamo insieme elementi naturali, e li usiamo per creare magici personaggi che abitino il nostro mondo immaginario.'
        },
    ]

    return (
        <>
            <PageTemplate>
                <Container className='mt-5 mb-5'>
                    <Row className='mt-5'>
                        <h1 className='d-flex justify-content-center animate__animated animate__slideInDown'>Workshop</h1>
                        <p className='text-center'>
                            Lambrock è amore, musica e cultura. Scopri tutti i worskhop che abbiamo organizzato per il tuo weekend lupesco: attività manuali, momenti creativi, talk, presentazioni di libri in compagnia dell’autor* e degustazione di prodotti locali, in compagnia di espert* e associazioni locali. Per tutti, grand* e piccini*.                        </p>
                        <hr />
                    </Row>
                </Container>

                <Container className='mt-5 mb-5'>

                    {/* Sabato */}
                    <Row className='d-flex align-items-center justify-content-center'>
                        <Col sm={5} ref={workshopBoxRef} className=''>
                            <ExportedImage
                                src={workshopBox2}
                                alt="lupo-workshop"
                                layout="responsive"
                            />
                        </Col>
                        <Col sm={4} ref={textRef1} className='mt-5'>
                            <h2 className=''>Sabato</h2>
                            <ul>
                                <li> Laboratorio di stampa per bambini</li>
                                <li> Incisione su gioielli</li>
                                <li> Scratch art</li>
                                <li> Laboratorio di cianotipie floreali</li>
                                <li> Xilografia</li>
                            </ul>
                            <OffCanvas 
                                cname={style.btn} 
                                url='https://forms.gle/QXsQimszEt3zxGe38' 
                                src='/2024/images/qr.png'
                            />
                        </Col>
                    </Row>

                    <Container>
                        <Row className='text-center mt-5 mb-5'>
                            <h2 className='mt-5'>AUTOPRODUZIONI</h2>
                            <Col sm={12}>
                                <p>
                                    Vieni a scoprire i banchetti! Un'opportunità per sostenere il lavoro artigianale e trovare pezzi unici fatti a mano. Sostieni la produzione indipendente !
                                </p>
                            </Col>

                        </Row>
                    </Container>

                    {/* Domenica */}
                    <Row className='mt-5 d-flex align-items-center justify-content-center'>
                        <Col sm={5} ref={textRef2} className='mt-5 '>
                            <h2 className='text-end'>Domenica</h2>
                            <ul className={`${style.directionRtl}`}>
                                <li className={`${style.liEmbended}`}>Laboratorio di tarocchi di Marsiglia</li>
                                <li className={`${style.liEmbended}`}>Fiori Origami</li>
                                <li className={`${style.liEmbended}`}>Arte inclusiva - Cascina Cristina</li>
                                <li className={`${style.liEmbended}`}>Laboratorio sulle mestruazioni</li>
                                <OffCanvas 
                                    cname={style.btn} 
                                    url='https://forms.gle/QXsQimszEt3zxGe38' 
                                    src='/2024/images/qr.png'
                                />
                            </ul>
                        </Col>
                        <Col sm={4} ref={workshopBox2Ref} className=''>
                            <ExportedImage
                                src={workshopBox}
                                alt="le mat"
                                layout="responsive"
                            />
                        </Col>
                    </Row>

                    {/* Carosello WS */}
                    <Row className='m-2 mt-5'>
                        <Partners className='mt-5' partners={partners} />
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