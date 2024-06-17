import './ShapeImagesGrid.css';

export default function ShapeImagesGrid(props) {
    return (
        <div className="shapegallery">
            {props.urls.map((url, index) => (
                <img key={index} className="shapeimg" src={url} />
            ))}
        </div>
    );
}