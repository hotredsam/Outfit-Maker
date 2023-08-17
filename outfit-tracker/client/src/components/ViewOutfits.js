import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { scrollUp, scrollDown } from './ScrollableSection';

const ViewOutfits = () => {
    // const viewoutfits = () => {
  const dispatch = useDispatch();
  const scrollPosition = useSelector(state => state.scrollPosition);

  const handleScroll = direction => {
    if (direction === 'up') {
      dispatch(scrollUp());
    } else if (direction === 'down') {
      dispatch(scrollDown());
    }
  };
  return (
    <>
            <div style={{ height: '1000px', overflowY: 'scroll' }}>
        <button onClick={() => handleScroll('up')}>Scroll Up</button>
        <button onClick={() => handleScroll('down')}>Scroll Down</button>
        <div style={{ paddingTop: scrollPosition }}>Content</div>
      </div>
    </>
    
  );
}

export default ViewOutfits;