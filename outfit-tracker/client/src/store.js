// store.js
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';

// rest of your code

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
