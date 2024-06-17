import { ExpandableImagesGrid } from './ExpandableImagesGrid';
import { ShapeImagesGrid } from './ShapeImagesGrid';
import { MiniPhotoGallery } from './MiniPhotoGallery';
import { ExpandableImagesSlider } from './ExpandableImagesSlider';

// style
import './ImageGallery.css'

export default function ImageGallery(props) {
    return (
        <div className="galleria">
            <div className="container">
                <div className="item-slider">
                    <ExpandableImagesSlider urls={props.imageSources.sliderURLs}/>
                </div>
                <div className="item-4">
                    <img className="img" src={props.imageSources.itemImages[0]} alt="" />
                </div>
                <div className="item-5">
                    <img className="img" src={props.imageSources.itemImages[1]} alt="" />
                </div>
                <div className="item-6">
                    <MiniPhotoGallery urls={props.imageSources.miniURLs} />
                </div>
                <div className="item-7">
                    <img className="img" src={props.imageSources.itemImages[2]} alt="" />
                </div>
                <div className="item-8">
                    <img className="img" src={props.imageSources.itemImages[3]} alt="" />
                </div>
                <div className="item-9">
                    <ExpandableImagesGrid urls={props.imageSources.expandableGridURLs}/>
                </div>
                <div className="item-10">
                    <img className="img" src={props.imageSources.itemImages[4]} alt="" />
                </div>
                <div className="item-11">
                    <ShapeImagesGrid urls={props.imageSources.shapeURLs} />
                </div>
                <div className="item-12">
                    <img className="img" src={props.imageSources.itemImages[5]} alt="" />
                </div>
                <div className="item-13">
                    <img className="img" src={props.imageSources.itemImages[6]} alt="" />
                </div>
                <div className="item-14">
                    <img className="img" src={props.imageSources.itemImages[7]} alt="" />
                </div>
                <div className="item-15">
                    <img className="img" src={props.imageSources.itemImages[8]} alt="" />
                </div>
            </div>
        </div>
    );
};
