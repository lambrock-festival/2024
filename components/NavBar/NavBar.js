import { useState } from 'react';
import Link from 'next/link';
// style
import s from './NavBar.module.scss';
// components
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import lupiWorkshop from '@/public/images/lupi-workshop.webp';
import lupiSocial from '@/public/images/lupo-social.webp';
import Logo from '@/public/images/Logo.png';
import { Navbar, Container, Col, Row } from 'react-bootstrap';

export default function NavBar() {
    const [navWidth, setNavWidth] = useState(0);
    /*
        const [ hoveredImage,  setHoveredImage] = useState(null);
    */
    const openNav = () => setNavWidth(100);
    const closeNav = () => setNavWidth(0);
    /*
        const handleMouseEnter = (index) => setHoveredImage(index);
        const handleMouseLeave = () => setHoveredImage(null);
    */
    const menuItems = [
        { text: 'home', image: lupiWorkshop, href: '/' },
        { text: 'line-up', image: lupiWorkshop, href: 'band' },
        { text: 'workshop', image: lupiWorkshop, href: 'workshop' },
        /* { text: 'banchetti', image: lupiBanchetti, href: 'banchetti' }, */
        { text: 'food & drink', image: lupiWorkshop,/*  subMenuItems: ['Sfoglia', 'Allergeni'], */ href: 'menu', /* subHref: ['menu/sfoglia', 'menu/allergeni'] */ },
        { text: 'contatti', image: lupiSocial,/*  subMenuItems: ['come-arrivare', 'contatti'], */ href: 'info'/* , subHref: ['come-arrivare', 'contatti'] */ },
        { text: 'associazione', image: lupiWorkshop, href: 'associazione' },

    ];
    return (
        <Navbar
            className="d-inline d-md-flex justify-content-between align-items-center text-black w-100 p-5 mr-5 ml-5"
            style={{
                fontSize: '1.5em',
                fontFamily: "var(--inktrap-regular-font)",
            }} 
        >
            <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className="d-flex justify-content-between align-items-center"
                style={{
                    minWidth: '13em',
                    maxWidth: '25em',
                    border: '2px solid black',
                    borderRadius: '5em',
                    padding: '0 1em',
                }}
            >
                <div>
                    <div><i className='fas fa-bars-staggered z' onClick={openNav} style={{ fontSize: '1rem', cursor: 'pointer', position: 'relative', zindex: 5 }}></i></div>
                    <div id='myNav' className={`${s.overlay}`} style={{ width: `${navWidth}%` }}>
                        <span className={`${s.closebtn}`} onClick={closeNav}>&times;</span>
                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={`${s['overlay-content']}`}
                                /*  
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave} 
                                */
                                onClick={() => {}}
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
                <span>LAMBROCK-FEST</span>
            </Col>

            <Col className="d-flex justify-content-center align-items-center"
                xs={12}
                sm={12}
                md={2}
                lg={2}
                xl={2}
                xxl={2}
            >
                <Navbar.Brand href='/2024'>
                    <ExportedImage
                        src={Logo}
                        alt="Logo"
                        width={150.0}
                        height={91.0}
                    />
                </Navbar.Brand>
            </Col>

            <Col 
                xs={12}
                sm={12}
                md={5}
                lg={5}
                xl={5}
                xxl={5}
                className="d-flex justify-content-between align-items-center"
                style={{
                    minWidth: '13em',
                    maxWidth: '25em',
                    border: '2px solid black',
                    borderRadius: '5em',
                    padding: '0 1em',
                }}
            >
                <span>20&rarr;23</span> 
                <span>GIUGNO 2024</span>
            </Col>
        </Navbar >
    );
}
