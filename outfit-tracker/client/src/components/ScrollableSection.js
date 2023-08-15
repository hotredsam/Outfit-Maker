import React from 'react';
import './ScrollableSection.css';

const ScrollableSection = ({ images }) => {
    return (
        <div className="scrollable-section-conatiner">
            <div className="scrollable-section">
                {images.map((image, index) => (
                    <div className="section-column">
                        <img key={index} src={image.top} alt={`Top ${index}`} />
                        <img key={index} src={image.middle} alt={`Middle ${index}`} />
                        <img key={index} src={image.bottom} alt={`Bottom ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScrollableSection;
