// template
import { getPageMD } from '@/utils/load-md';
import { Template } from '@/components/Templates';
// react
import { useEffect, useRef } from 'react';
// bootstrap
import { Container, Row, Col } from 'react-bootstrap';
// style
import * as style from '@/styles/Workshop.module.scss';
import 'animate.css';
// image 
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import copertina from '@/public/images/workshopcopertina.webp'
import workshopBox from '@/public/images/workshopbox.webp'
import workshopBox2 from '@/public/images/workshopbox2.webp'
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
            name: 'TALK: STATUARIA COLONIALISTA',
            copy: 'Un breve ma intenso viaggio attraverso alcune delle rappresentazioni statuarie coloniali più controverse e razziste del Belgio, ancora in bella vista nella multiculturalissima Bruxells. Relatore e moderatore Matteo Redaelli.',
        },
        {
            name: 'PET THERAPY',
            copy: 'I bambini entreranno in contatto diretto con cani addestrati (vaccinati e assicurati) in ambito educativo: impareranno ad accarezzare, spazzolare, dare da mangiare e interagire correttamente con i pet. Laboratorio rivolto ai bambini dagli 0 ai 10 anni in modo differenziato; con Claudia Bordoli di Dog4Life.'
        },
        {
            name: 'OGNI BAMBIN* È UN ARTISTA',
            copy: 'Imparare divertendosi: laboratori pensati e strutturati per fare in modo che i bambini potenzino le loro capacità attraverso l’uso di diversi materiali(carta, gomma eva, pannolenci, plastilina) e sviluppino la motricità fine.Età minima: dai 4 anni, dai 3 alla presenza di un genitore.'
        },
        {
            name: 'DOVE VIVONO I LUPI?',
            copy: 'Dove vivono i lupi? Un laboratorio che offre ai bambin* uno spazio di sperimentazione di linguaggi espressivi, come quello narrativo e quello grafico-artistico. Creazione di tinte naturali, tante attività e tutti alla ricerca del lupo! Per tutte le bambine e i bambini, con le educatrici di KEATS Aps.'
        },
        {
            name: 'DEGUSTAZIONE DI VINI',
            copy: 'Alla scoperta dei vini di Giachino Claudio, di Montelupo Albese (CN), e dei vini del cuneese: langhe bianco, chardonnay, dolcetto e  nebbiolo d’alba.Degustazione di vini curata da "Il circolo Arci Terra e Libertà Enoteca Popolare" di Cantù.'
        },
        {
            name: 'LABORATORIO DI GIOCOLERIA',
            copy: 'Un incontro con il mondo del circo attraverso la conoscenza e la sperimentazione degli attrezzi di giocoleria più famosi: palline, cerchi, clave, foulard e piatti cinesi. Un occasione per sfidare le proprie capacità e di divertirsi insieme, con "CIRCOLIAMO".'
        },
        {
            name: 'APERISEGNO',
            copy: 'Un aperitivo sociale, divertente e aperto a tutti. L’unica regola? È obbligatorio comunicare attraverso la lingua dei segni LIS.Curato da un team di docenti LIS, che forniranno cartoncini e strumenti utili ad imparare l’ABC della gestualità più espressiva che ci sia.'
        },
        {
            name: 'ACCHIAPPASOGNI',
            copy: 'Il laboratorio si aprirà con un’introduzione sull’origine dell’acchiappasogni e sulle essenze botaniche da intreccio, per poi passare all’azione: realizzerai un intreccio circolare utilizzando rami duttili e una tela di fili che, in seguito, decorerai con elementi naturali.'
        },
        {
            name: 'CIANOTIPIE FLOREALI',
            copy: 'Grazie alla cianotipia, antico metodo di stampa fotografica, nato proprio per creare i libri botanici, scopriamo cosa e quali sono le specie nettarifere: un laboratorio organizzato da "AL LÖCH" divertente, formativo, pern scoprire i segreti nascosti dei nostri prati.'
        },
        {
            name: 'BOMBE DI SEMI',
            copy: 'Con gli esperti botanici del "AL LÖCH" scopriamo insieme cosa sono i fiori nettariferi, e usiamo i loro semi per creare bombe di semi per i nostri balconi e giardini, per aiutare gli insetti a trovare più facilmente fonti di nutrimento anche in città.'
        },
    ]

    return (
        <>
            <Template>
                <div className='mb-5 ' style={{
                    position: 'relative',
                    height: '75vh',
                    '@media (maxWidth: 768px)': {
                        height: '55vh',
                    },
                }}>
                    <ExportedImage
                        src={copertina}
                        alt="workshop"
                        layout='fill'
                        objectFit='cover'
                        priority
                        style={{ zIndex: -1 }}
                    />
                </div>
                <Container className='mt-5 mb-5'>
                    <Row className='mt-5'>
                        <h1 className='d-flex justify-content-center animate__animated animate__slideInDown'>Workshop</h1>
                        <p className='text-center'>
                            Lambrock è amore, musica e cultura. Scopri tutti i worskhop che abbiamo organizzato per il tuo weekend lupesco: attività manuali, momenti creativi, talk, presentazioni di libri in compagnia dell’autor* e degustazione di prodotti locali, in compagnia di espert* e associazioni locali. Per tutti, grand* e piccini*.                        </p>
                        <hr />
                    </Row>
                </Container>

                <Container className='mt-5 mb-5'>
                    <Row className='d-flex align-items-center justify-content-center'>
                        <Col sm={6} ref={workshopBoxRef} className=''>
                            <ExportedImage
                                src={workshopBox2}
                                alt="lupo-workshop"
                                layout="responsive"
                            />
                        </Col>
                        <Col sm={6} ref={textRef1} className='mt-5'>
                            <h2 className=''>Sabato</h2>
                            <ul>
                                <li> Degustazione con enoteca popolare</li>
                                {/* <li> Laboratorio per bambini con Keats</li> */}
                                <li> Laboratorio di circo</li>
                                <li> Laboratorio di cianotipie floreali</li>
                                <li> Pet therapy</li>
                                <li> Xilografia</li>
                            </ul>
                            <OffCanvas className={style.btn} />
                        </Col>
                    </Row>
                    <Row className='mt-5 d-flex align-items-center justify-content-center'>
                        <Col sm={6} ref={textRef2} className='mt-5 '>
                            <h2 className='text-end'>Domenica</h2>
                            <ul className={`${style.directionRtl}`}>
                                <li className={`${style.liEmbended}`}>Laboratorio di acchiappasogni</li>
                                {/* <li className={`${style.liEmbended}`}>Opificio imaginarium</li> */}
                                {/* <li className={`${style.liEmbended}`}>Laboratorio di acchiappasogni</li> */}
                                <li className={`${style.liEmbended}`}>Laboratorio di cianotipie floreali</li>
                                <li className={`${style.liEmbended}`}>Laboratorio di ”bombe di semi”</li>
                            </ul>
                            <OffCanvas className={style.btnSpecular} />
                        </Col>
                        <Col sm={6} ref={workshopBox2Ref} className=''>
                            <ExportedImage
                                src={workshopBox}
                                alt="lupo-workshop"
                                layout="responsive"
                            />
                        </Col>
                    </Row>
                    {/* Carosello WS */}
                    <Row className='m-2 mt-5'>
                        <Partners className='mt-5' partners={partners} />
                    </Row>

                </Container>

            </Template >
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