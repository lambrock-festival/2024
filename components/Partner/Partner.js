import ExportedImage from 'next-image-export-optimizer';
import { Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import style from './Partner.module.scss';

export default function Partners({ partners }) {
    // if is mobile not auto play check before window existance
    const autoplay = (typeof window !== 'undefined' && window.innerWidth > 768) ? false : false;
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    return (
        <Carousel
            // isRTL={false} // isRTL={true} means to enable RTL support. This will automatically change the arrow keys direction and sliding direction.
            // breakPoints={breakPoints}
            /* 
                transitionMs={1000}
                disableArrowsOnEnd={false}
                easing="linear"
                enableAutoPlay
            */
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={false} // ssr={true} means to render carousel on server-side.
            infinite={true}
            autoPlay={autoplay}
            autoPlaySpeed={1000}
            keyBoardControl={false}
            //customTransition="all 1s linear"
            transitionDuration={2000}
            containerClass="carousel-container"
            /* removeArrowOnDeviceType={["tablet", "mobile"]} */
            // on mobile not auto play
            shouldResetAutoplay={false}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            arrows={true}
        >
            {
                partners.map((partner, index) => (
                    <Row key={index} className="mt-5">
                        <div key={index} className="partner">
                            {
                                (partner.logo)
                                    ?
                                    <ExportedImage src={partner.logo} alt={partner.name} /* width={partner.width} height={partner.height} */ layout='responsive'
                                        style={{ marginBottom: '2rem', marginRight: '2rem', padding: '0 1rem' }}
                                    />
                                    :
                                    <Row className={style.outerContainer}>
                                        <Col className={style.innerContainer}>
                                            <h2 className="">{partner.name}</h2>
                                            <p className="">{partner.copy}</p>
                                        </Col>
                                    </Row>
                            }
                        </div>
                    </Row>
                ))
            }
        </Carousel >
    );
};