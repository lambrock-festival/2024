import { useState } from 'react';
//import Alert from 'react-bootstrap/Alert';
//import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// style
/* import * as style from '@/OffCanvas/OffCanvas.module.scss'; */
// image
import ExportedImage from 'next-image-export-optimizer';

export default function OffCanvas({ cname, url, src }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <a onClick={handleShow} className={cname}>
                iscriviti
            </a>

            <Offcanvas show={show} onHide={handleClose} placement='end' name='ws_sub' /* responsive="lg" */>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <i className='fas fa-link me-3'></i>
                        <a href={url} target='_blanck'>Iscriviti qui</a>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h4 className='text-center'>Scansiona il QR</h4>
                    <ExportedImage src={src} width={200} height={200} layout='responsive' alt="qrcode" />
                    <h4 className='mt-5 text-center'>Oppure compila da qui</h4>
                    <iframe src={url} width="100%" height="2550" frameborder="" marginheight="0" marginwidth="0">Caricamento…</iframe>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}