import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faGoogle, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
//import Image from 'next/image';
import * as s from './Footer.module.scss'
import Link from 'next/link';
/// bootstrap
import { Container, Col, Row } from 'react-bootstrap';
import Lineup from '@/public/images/lineup.webp'
import Musica from '@/public/images/icons/musica.webp'
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import fb from '@/public/images/icons/fb.webp';
import ig from '@/public/images/icons/ig.webp';
import tg from '@/public/images/icons/tg.webp';
import mail from '@/public/images/icons/mail.webp';
import mdv from '@/public/images/icons/mdv.webp';

export default function Footer({ children }) {
    return (
        <>
            <footer style={{ zindex: '1' }} className='position-relative bg-black text-muted '>
            
                <div className='position-relative' style={{ top: '2vh', left: '0', padding: '0' }}>{children}</div>

                <div className='container-fluid py-5'>
                    <div className='row justify-content-between align-items-center mb-4'>
                        <div className={`col-12 d-flex justify-content-center ${s.zoom}`} style={{
                            filter: 'invert(100%)'
                        }}>
                            <a href='https://www.facebook.com/lambrockfestival' target='_blank' className='me-4 ml-5'>
                                <ExportedImage
                                    src={fb}
                                    alt="fb"
                                    //layout="fixed"
                                    width={110}
                                    height={110}
                                />
                            </a>
                            <a href='mailto:lambrockfest@gmail.com' target='_blank' className='me-4'>
                                <ExportedImage
                                    src={mail}
                                    alt="mail"
                                    //layout="fixed"
                                    width={110}
                                    height={110}
                                />
                            </a>
                            <a href='https://instagram.com/_u/lambrockfestival/' target='_blank' className='me-4'>
                                <ExportedImage
                                    src={ig}
                                    alt="ig"
                                    //layout="fixed"
                                    width={110}
                                    height={110}
                                />
                            </a>
                            <a href='https://t.me/lambrockfestival' target='_blank' className='me-4'>
                                <ExportedImage
                                    src={tg}
                                    alt="tg"
                                    //layout="fixed"
                                    width={110}
                                    height={110}
                                />
                            </a>
                            <a href='https://mondodelleuova.it' target='_blank' className='me-4 ml-5'>
                                <ExportedImage
                                    src={mdv}
                                    alt="mdv"
                                    //layout="fixed"
                                    width={90}
                                    height={110}
                                />
                            </a>
                        </div>
                    </div>

                    <hr className='mb-5 text-white' />

                    <div className='row justify-content-between'>
                        <div className='col-12 col-md-3 col-lg-4 mb-4 mb-lg-0 text-center'>

                            <h4 className='text-capitalized fw-light fs-10 mb-4 text-white'>
                                Lambrock Festival XI - 2024
                            </h4>
                            <p>
                                Lambrock Festival è arrivato alla sua undicesima edizione, e siamo pronti a farvi vivere un'esperienza unica.
                            </p>
                        </div>
                        <div className='col-6 col-md-3 col-lg-2 mb-4 mb-md-0 text-center'>
                            <h6 className='text-capitalize fw-bold mb-4 text-white'>
                                <i className='fas fa-link me-3'></i>
                                {/* <FontAwesomeIcon icon={faLink} className='me-3' /> */}
                                links utili
                            </h6>
                            <ul style={{ listStyle: 'none' }} className='p-0'>
                                <li className='mb-2'>
                                    <Link href='/' className='text-reset'>Home</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='/band' className='text-reset'>Band</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='/workshop' className='text-reset'>Workshop</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='/menu' className='text-reset'>Menù</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='/info' className='text-reset'>Info</Link>
                                </li>
                                <li className='mb-2'>
                                    <Link href='/sport' className='text-reset'>Basket</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6 col-md-2 col-lg-2 mb-4 mb-md-0 text-center'>
                            <h6 className='text-capitalize fw-bold mb-4 text-white'>
                                <i className='fas fa-download me-3'></i>
                                {/* <FontAwesomeIcon icon={faDownload} className='me-3' /> */}
                                scaricabili
                            </h6>
                            <ul className='list-unstyled'>
                                <li className='mb-2'>
                                    <a href='#' className='text-reset'>Lista Allergeni</a>
                                </li>
                            </ul>
                        </div>
                        <div className='col-12 col-md-4 col-lg-3 text-center'>
                            <h6 className='text-capitalize fw-bold mb-4 text-white'>
                                <i className='fas fa-address-card me-3'></i>
                                {/* <FontAwesomeIcon icon={faAddressCard} className='me-3' /> */}
                                contatti
                            </h6>
                            <ul className='list-unstyled'>
                                <li className='mb-2'>
                                    <div>
                                        Via Cristoforo Colombo, 4,
                                    </div>
                                    <div>
                                        22032 Albese con Cassano CO
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='bg-dark text-white text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                    <div className='container-fluid'>
                        <div className='row'>
                            <small style={{ fontSize: '0.8rem' }}>
                                Realizzato dai volontari di Lambrock e di MondoDelleuoVa
                            </small>
                        </div>
                    </div>
                </div>

            </footer >
        </>
    );
}