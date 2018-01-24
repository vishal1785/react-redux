import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import posts from './data/posts';
import comments from './data/comments';


var defaultSoreData={
    posts,comments
}

var store = createStore(rootReducer,defaultSoreData);
export default store;
