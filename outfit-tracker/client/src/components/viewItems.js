import React from 'react';
import './viewItems.css';
import ScrollableSection from './ScrollableSection';


//test
const ViewItems = () => {
    const images = [
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
        'https://picsum.photos/200',
    ].map(s => ({
        top: s,
        middle: s,
        bottom: s
    }));  
  return (
    <div className='view-items-content'>
            <h1>View Items</h1>
            <div className="scrollable-section-container">
                <ScrollableSection images={images} />
            </div>

        </div>
    );
}

export default ViewItems