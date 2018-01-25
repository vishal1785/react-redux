
import React from 'react';

export default class CommentComponent extends React.Component {
    render(){
        return(
            <div className="commentDiv">
                <p> {this.props.cmntObj.user} : {this.props.cmntObj.text} </p>
            </div>
        );
    }
}