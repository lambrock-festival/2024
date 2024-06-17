import './ExpandableImagesSlider.css';

export default function ExpandableImagesSlider(props) {
    return (
        <div className="containerGallerySlider">
            {props.urls.map((url, index) => (
                <img key={index} className="sliderimg" src={url} />
            ))}
        </div>
    );
}