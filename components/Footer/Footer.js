import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faFacebookF, faGoogle, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
//import Image from 'next/image';
import * as s from './Footer.module.scss'
import Link from 'next/link';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import fb from '@/public/images/icons/fb.png';
import ig from '@/public/images/icons/ig.png';
import tg from '@/public/images/icons/tg.png';
import mail from '@/public/images/icons/mail.png';
import mdv from '@/public/images/icons/mdv.png';

export default function Footer() {
    return (
        <footer className='bg-light text-muted'>
            <div className='container py-5'>
                <div className='row justify-content-between align-items-center mb-4'>
                    <div className={`col-12 d-flex justify-content-center ${s.zoom}`}>
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
                <hr className='mb-5' />
                <div className='row justify-content-between'>
                    <div className='col-12 col-md-3 col-lg-4 mb-4 mb-lg-0 text-center'>

                        <h4 className='text-capitalized fw-light fs-10 mb-4'>
                            Lambrock Festival X - 2023
                        </h4>
                        <p>
                            Lambrock Festival è arrivato alla sua decima edizione, e siamo pronti a farvi vivere un'esperienza unica.
                        </p>
                    </div>
                    <div className='col-6 col-md-3 col-lg-2 mb-4 mb-md-0 text-center'>
                        <h6 className='text-capitalize fw-bold mb-4'>
                            <i className='fas fa-link me-3'></i>
                            {/* <FontAwesomeIcon icon={faLink} className='me-3' /> */}
                            links utili
                        </h6>
                        <ul style={{ listStyle: 'none' }} className='p-0'>
                            <li className='mb-2'>
                                <Link href='/home' className='text-reset'>Home</Link>
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
                                <Link href='/info#mappalrf' className='text-reset'>Mappa</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6 col-md-2 col-lg-2 mb-4 mb-md-0 text-center'>
                        <h6 className='text-capitalize fw-bold mb-4'>
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
                        <h6 className='text-capitalize fw-bold mb-4'>
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
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                <div className='container-fluid'>
                    <div className='row'>
                        {/* font small */}
                        <small style={{ fontSize: '0.8rem' }}>
                            Realizzato dai volontari di Lambrock Festival
                        </small>
                    </div>
                </div>
            </div>
        </footer >
    );
}