// // actions.js
// export const scrollUp = () => ({
//     type: 'SCROLL_UP',
//   });
  
//   export const scrollDown = () => ({
//     type: 'SCROLL_DOWN',
//   });
  
//   // reducer.js
//   const initialState = {
//     scrollPosition: 0,
//   };
  
//   const scrollReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'SCROLL_UP':
//         return {
//           ...state,
//           scrollPosition: state.scrollPosition - 100, // Adjust as needed
//         };
//       case 'SCROLL_DOWN':
//         return {
//           ...state,
//           scrollPosition: state.scrollPosition + 100, // Adjust as needed
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default scrollReducer;
  





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
