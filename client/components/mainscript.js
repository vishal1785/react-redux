import { connect } from "react-redux";
import MainComponent  from "./main.component";
import { bindActionCreators } from "redux";
import * as allActions from '../action/actions'

// this storedata is coming from store.js via createStore argument
function mapStateToProps(storeData){
    // passed to main component as props
    return {
        myposts:storeData.posts,
        mycomments:storeData.comments
    }
}

// all the actions are mapped to dispatch
function mapDispatchToProps(dispatch){
    return bindActionCreators(allActions,dispatch)
}

var App = connect(mapStateToProps,mapDispatchToProps)(MainComponent);
export default App;