// component
import { Countdown } from '@/components/Countdown';
import Link from 'next/link';
/// bootstrap
import { Container, Col, Row } from 'react-bootstrap';
// style
import * as s from '@/styles/Index.module.scss';
//image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import lambrockarco from '@/public/images/lambrockarco.png'
import lupiFalo from '@/public/images/lupiFalo.png'

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
        priority
        style={{ zIndex: -1 }}
      />
      {/* "background: #0003"></div> */}
      <div className="position-fixed w-100 h-100" style={{ background: '#0003' }}></div>
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

      <Container fluid className='mb-5' zIndex={1}>
        <Row className='mb-5 d-flex align-items-center justify-content-center text-center'>
          <Col sm={12}>
            <h2 className={s.date}>Giugno <span>16/17/18</span></h2>
          </Col>
        </Row>
        <Row className='d-flex align-items-center justify-content-center text-center'>
          <Link href='/home' className={s.btn}>
            Entra nella tana del lupo
          </Link>
        </Row>
      </Container>

      <Row className='d-flex'>
        <Col sm={12}>
          <Countdown />
        </Col>
      </Row>


    </>
  );
}
