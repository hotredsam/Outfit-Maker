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


// import CreateOutfitForm from './CreateOutfitForm';
// import UploadImageForm from './UploadImage';
// import CreateAccountForm from './CreateAccountForm';
// import LoginForm from './LoginForm';
// import viewoutfits from './ViewOutfits'; // Ensure you import the correct path

    {/* <BrowserRouter>
      <div>
        <h1>Your App Title</h1>
        <Link to="/create">Create New Outfit</Link>
        <Link to="/upload">Upload Image</Link>
        <Link to="/create-account">Create Account</Link>
        <Link to="/login">Login</Link>
        <Link to="/view-outfits">View Outfits</Link>

        <Route path="/create" component={CreateOutfitForm} />
        <Route path="/upload" component={UploadImageForm} />
        <Route path="/create-account" component={CreateAccountForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/view-outfits" component={ViewOutfits} />
      </div>
    </BrowserRouter> */}


// export default App;
