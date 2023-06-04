// component
import { Countdown } from '@/components/Countdown';
import Link from 'next/link';
/// bootstrap
import { Container, Col, Row } from 'react-bootstrap';
// style
import * as s from '@/styles/Index.module.scss';
//image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import lambrockarco from '@/public/images/lambrockarco.webp'
import lupiFalo from '@/public/images/lupiFalo.webp'

export default function Index() {
  return (
    <>
      {/* <CustomCursor /> */}

      {/* background */}
      <ExportedImage
        src={lupiFalo}
        alt='lupifalo'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        style={{ zIndex: -1 }}
      />

      {/* background overlay */}
      <div className="position-fixed w-100 h-100" style={{ background: '#0003', zIndex: -1 }}></div>

      <Container fluid className='mb-5' /* style={{ zIndex: 1 }} */>

        {/* LAMBROCK ARCO */}
        <Container>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col
              xs={{ span: 20, order: 1 }}
              sm={{ span: 12, order: 1 }}
            >
              <ExportedImage
                src={lambrockarco}
                layout='responsive'
                alt='LambrockArco'
                className={s.lambrockarco}
                priority
              />
            </Col>
          </Row>
        </Container>

        {/* DATE */}
        <Row className='mb-5 d-flex align-items-center justify-content-center text-center'>
          <Col sm={12}>
            <h2 className={s.date}>Giugno <span>16/17/18</span></h2>
          </Col>
        </Row>

        {/* BUTTON */}
        <Row className='d-flex align-items-center justify-content-center text-center'>
          <Link href='home' className={s.btn}>
            Entra nella tana del lupo
          </Link>
        </Row>

        {/* COUNTDOWN */}
        <Row>
          <Col sm={12} className='d-flex align-items-center justify-content-center'>
            <Countdown />
          </Col>
        </Row>

      </Container>

    </>
  );
}
