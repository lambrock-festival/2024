// template
import { getPageMD } from '@/utils/load-md';
import { Template } from '@/components/Templates';
// style
import * as s from '@/styles/Menu.module.scss';
// bootstrap
import { Col, Container, Row } from 'react-bootstrap';
// image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import copertina from '@/public/images/cibo-copertina.webp'
import locandinaMenu from '@/public/images/locandina-menu.webp'
import lupofalosx from '@/public/images/lupi-falo-neri-sx.webp'
import lupofalodx from '@/public/images/lupi-falo-neri-dx.webp'
import borraccia from '@/public/images/borraccia.webp'

export default function Menu({ data }) {
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
                <Row className='m-2 mt-5 text-align-center'>
                    <Col className='mt-5' sm={4}>
                        <ExportedImage
                            src={lupofalosx}
                            layout='responsive'
                            alt='LupoFaloSX'
                            className={s.lupifalocol}
                        />
                    </Col>
                    <Col sm={4} className='mt-5'>
                        <ExportedImage
                            src={locandinaMenu}
                            alt="mappa"
                            layout='responsive'
                            priority
                        />
                        {/* <Book /> */}
                    </Col>
                    <Col className='mt-5' sm={4}>
                        <ExportedImage
                            src={lupofalodx}
                            layout='responsive'
                            alt='LupoFaloSX'
                            className={s.lupifalocol}
                        />
                    </Col>
                </Row>
                <hr />
                <Container>
                    <Row className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
                        <Col sm={6} className='mt-5'>
                            <h2 className='text-upper text-end'>Acqua gratis</h2>
                            <div className='d-flex'>
                                <p className='text-end'>
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
            </Template >
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
