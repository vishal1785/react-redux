import ReactDOM from 'react-dom';
import React from 'react';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from "react-redux";

import MainComponent from './components/main.component';
import AllPostComponent from './components/allposts.component';
import SingleComponent from './components/singlepost.component';
import store from './store';
import App from "./components/mainscript";

var router = 
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App} >
                <IndexRoute component={AllPostComponent} />
                <Route path="/singlepost" component={SingleComponent} />
            </Route>
        </Router>
    </Provider>

ReactDOM.render(
    router,
    document.getElementById('content')
); 



