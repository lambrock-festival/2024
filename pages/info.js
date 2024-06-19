// PageTemplate
import { PageTemplate } from '@/components/Templates';
import { getPageMD } from '@/utils/load-md';
// react
import React, { useState } from 'react';
// style
import * as s from '@/styles/Info.module.scss';
// bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import Parking from '@/public/images/parking.jpg'
import lupobar from '@/public/images/lupi-volontari.webp'
import mappa from '@/public/images/mappa.webp'

export default function Info({ data }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const mailToLink = `mailto:youremail@example.com?subject=Mail from ${name}&body=${message}`;
        window.open(mailToLink, '_blank');
    };
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
                        alt="storia"
                        layout='fill'
                        objectFit='cover'
                        priority
                        style={{ zIndex: -1 }}
                    />
                </div> */}
                <Container className='mt-5 mb-5'>
                    <Row className='mt-5 mb-5'>
                        <h1 className='d-flex justify-content-center animate__animated animate__slideInDown'>Info Utili</h1>
                        <p className='text-center'>
                            Se hai domande o vuoi sapere di più, contattaci.
                        </p> 
                    </Row>
                    <hr />
                </Container>
                <Container className='mt-5'>
                <Row className='mt-5 mb-5'>
                        <Col sm={8} className='mb-5'>
                            <ExportedImage
                                src={lupobar}
                                alt="lupo-bar"
                                layout='responsive'
                                style={{ transform: 'scaleX(-1)' }}
                                placeholder='blur'
                            />
                        </Col>
                        <Col sm={4} className='mt-5'>
                            <h4>Contatti</h4>
                            <p>
                                <strong>Email:</strong> lambrockfest@gmail.com
                                <a href='mailto:lambrockfest@gmail.com' />
                            </p>
                            <p>
                                <strong>Indirizzo:</strong> Via Cristoforo Colombo, 4, 22032 Albese con Cassano CO
                            </p>
                            <br />
                            <h4>Unisciti a noi</h4>
                            <form onSubmit={handleSubmit} className='mb-5'>
                                <div className={s['form-group']}>
                                    <label htmlFor='name'>Nome</label>
                                    <input
                                        type='text'
                                        className={s['form-control']}
                                        id='name'
                                        placeholder='Inserisci il tuo nome'
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>
                                <div className={`${s['form-group']}`}>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        type='email'
                                        className={s['form-control']}
                                        id='email'
                                        placeholder='Inserisci la tua email'
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className={`${s['form-group']}`}>
                                    <label htmlFor='message'>Messaggio</label>
                                    <textarea
                                        className={s['form-control']}
                                        id='message'
                                        rows='3'
                                        placeholder='Inserisci il tuo messaggio'
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                    ></textarea>
                                </div>
                                <button type='submit' className={`${s['btn']}`}>
                                    Invia
                                </button>
                            </form>

                        </Col>
                    </Row>
                    
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.8154060721213!2d9.164317815975984!3d45.79492577910634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a179564d7947%3A0x5326b0d39effa32e!2sLambrock%20Festival!5e0!3m2!1sit!2sit!4v1680695946453!5m2!1sit!2sit"
                        width="1000"
                        height="600"
                        className={s.img + ' mb-5'}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>

                    <Row className='mt-5 mb-5'>
                        <Col sm={8} className='mb-5'>
                            <ExportedImage
                                src={Parking}
                                alt="parking"
                                layout='responsive'
                                placeholder='blur'
                            />
                        </Col>
                        <Col sm={4} className='mt-5'>
                            <h4 className='mt-5'>Cerchi parcheggio?</h4>
                            <br />
                            <p>
                                Abbiamo pensato a tutto per rendere la tua esperienza al festival il più comoda possibile! Ampie aree di parcheggio sono disponibili nelle vicinanze dell'evento. Segui le indicazioni per guidarti al posto più vicino. Arriva in anticipo per assicurarti il posto migliore e goditi il festival senza preoccupazioni!
                            </p>

                        </Col>
                    </Row>
                </Container >

                {/* <Container id='mappalrf'>
                    <Row>
                        <Col sm={12} className='mb-5'>
                            <ExportedImage
                                src={mappa}
                                alt="mappa"
                                layout='responsive'
                            />
                        </Col>
                    </Row>
                </Container > */}

            </PageTemplate >
        </>
    );
}

export async function getStaticProps() {
    const data = getPageMD('info');
    return {
        props: {
            data,
        },
    };
}
