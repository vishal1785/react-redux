
import React from 'react';

export default class PostDetailComponent extends React.Component {
    render(){
        return(
            <div>
                <h2> {this.props.postObj.caption} </h2>
                <img src={this.props.postObj.display_src} height="100px" width="100px"/>
                <p> Likes: {this.props.postObj.likes} </p>
                <hr/>
            </div>
        );
    }
}