import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ViewOutfits.css';
import { scrollUp, scrollDown } from './ScrollableSection';

const ViewOutfits = () => {
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
        <p>VIEW OUTFITS</p>
    </div>
    </>
    
  );
}

export default ViewOutfits;