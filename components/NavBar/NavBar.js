import { useState } from 'react';
import Link from 'next/link';
// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
// style
import s from './NavBar.module.scss';
// my components
import { SocialBar } from '../SocialBar'
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import lupiWorkshop from '../../public/images/lupi-workshop.png';
import lupiSocial from '../../public/images/lupo-social.png';
import logo from '../../public/images/lupo-ponte.jpg';
import lambrock from '../../public/images/lambrock.png'
import festival from '../../public/images/festival.png'
import lf2023 from '../../public/images/2023.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';

export default function NavBar() {
    const [navWidth, setNavWidth] = useState(0);
    /* const [ hoveredImage,  setHoveredImage] = useState(null); */

    const openNav = () => setNavWidth(100);
    const closeNav = () => setNavWidth(0);

    /*     const handleMouseEnter = (index) => setHoveredImage(index);
        const handleMouseLeave = () => setHoveredImage(null); */
    const menuItems = [
        { text: 'home', image: lupiWorkshop, href: 'home' },
        { text: 'line-up', image: lupiWorkshop, href: 'band' },
        { text: 'workshop', image: lupiWorkshop, href: 'workshop' },
        /* eliminare item banchetti */
        /* { text: 'banchetti', image: lupiBanchetti, href: 'banchetti' }, */
        { text: 'food & drink', image: lupiWorkshop,/*  subMenuItems: ['Sfoglia', 'Allergeni'], */ href: 'menu', /* subHref: ['menu/sfoglia', 'menu/allergeni'] */ },
        { text: 'contatti', image: lupiSocial,/*  subMenuItems: ['come-arrivare', 'contatti'], */ href: 'info'/* , subHref: ['come-arrivare', 'contatti'] */ },
        { text: 'associazione', image: lupiWorkshop, href: 'associazione' },

    ];
    return (
        <>

            <Navbar variant="dark" className='m-0'>
                <Container className='d-flex align-items-between mr-5 ml-5'>

                    <ExportedImage
                        src={logo}
                        alt="logo"
                        className="d-inline-block align-top"
                        width={360}
                        height={240}
                    />

                    <Navbar.Brand href="home">
                        <Container fluid>
                            <Row className="align-items-center">
                                <Col xs className="ml-5 d-flex justify-content-center">
                                    <ExportedImage
                                        src={lambrock}
                                        alt="logo"
                                        // layout="fixed"
                                        width={920}
                                        height={240}
                                    />
                                </Col>
                                <Col xs="auto" className="d-none d-md-flex justify-content-center">
                                    <ExportedImage
                                        src={festival}
                                        alt="logo"
                                        // layout="fixed"
                                        width={300}
                                        height={72}
                                    />
                                </Col>
                                <Col xs="auto" className="d-none d-lg-flex justify-content-center">
                                    <ExportedImage
                                        src={lf2023}
                                        alt="logo"
                                        // layout="fixed"
                                        width={250}
                                        height={80}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </Navbar.Brand>
                    <div style={{ width: '256px' }} className='d-flex justify-content-center'>
                        <i className='fas fa-bars-staggered' style={{ fontSize: '2rem', cursor: 'pointer', zIndex: 1 }} onClick={openNav}></i>
                        {/* <FontAwesomeIcon
                            style={{ fontSize: '2rem', cursor: 'pointer', zIndex: 1 }}
                            icon={faBarsStaggered}
                            onClick={openNav}
                            className={`${s.openbtn} mr-3 text-dark text-hover-light`}
                        /> */}
                        <div id='myNav' className={`${s.overlay}`} style={{ width: `${navWidth}%` }}>
                            <span className={`${s.closebtn}`} onClick={closeNav}>&times;</span>
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`${s['overlay-content']}`}
                                    /*  onMouseEnter={() => handleMouseEnter(index)} */
                                    /* onMouseLeave={handleMouseLeave} */
                                    onClick={() => { }}
                                >
                                    <Link href={item.href} data-text={item.text}>{item.text}</Link>
                                    {item.subMenuItems && (
                                        <div className={`${s['overlay-content'], 'sub-menu'}`}>
                                            {item.subMenuItems.map((subItem, subIndex) => (
                                                <Link
                                                    key={subIndex}
                                                    href={item.subHref[subIndex]}
                                                    data-text={subItem}
                                                >
                                                    {subItem}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Navbar >
        </>
    );
}
