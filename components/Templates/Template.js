import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
/// bootstrap
import { Container, Col, Row } from 'react-bootstrap';
//image
import ExportedImage from 'next-image-export-optimizer/legacy/ExportedImage';
import Montagne from '@/public/images/Montagne.png'
import Gonfiabile from '@/public/images/LupoGonfiabile.png'
import Lupo from '@/public/images/Lupo.png'
import Colle from '@/public/images/Colle.png'

export default function Template({ children }) {

    var borgoJSX = <>
        {/* borgo sulla collina */}
        <div fluid className='position-relative' style={{bottom: '0vh', zindex: '-1'}}>
            <Row>
                <Col>
                    {/* lupo gonfiabile */}
                    <div className='position-absolute' style={{ left: '5vw', bottom: '0vh', zindex: '-1'}}>
                        <ExportedImage alt="gonfiabile" src={Gonfiabile} width={1543} height={1422} />
                    </div>

                    {/* montagne di sfondo */}
                    <div className='position-absolute' style={{ bottom: '6vh', zindex: '-1'}}>
                        <ExportedImage alt="sfondo" src={Montagne} width={3240} height={1700} />
                    </div>

                    {/* borgo */}
                    <div className='position-absolute' style={{bottom: '0vh'}}>
                        <ExportedImage alt="borgo" src={Colle} height={1937} width={3240}/>
                    </div>
            
                    {/* lupo box */}
                    <div className='position-absolute' style={{bottom: '0vh'}}>
                        <ExportedImage alt="lupo" src={Lupo} height={1937} width={3240}/>
                    </div>
                </Col>
            </Row>
        </div>
    </>


    return (
        <>
            <title>Lambrock Festival 2024</title>

            {/* navbar */}
            <div className="p-3 pt-0">
                <NavBar />
            </div>

            {/* content */}
            {children}

            {/* footer */}
            <Footer children={{ ...borgoJSX }} />
        </>
    );
}

