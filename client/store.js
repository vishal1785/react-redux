import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

// -------------referring to local posts and comments file----------
//import {createStore} from 'redux';
//import posts from './data/posts';
//import comments from './data/comments';

// var defaultSoreData={
//     posts,comments
// }

//var store = createStore(rootReducer,defaultSoreData);
//-------------------------------------------------------------------


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
