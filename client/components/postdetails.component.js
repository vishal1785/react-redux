
import React from 'react';
import { Link } from "react-router";

export default class PostDetailComponent extends React.Component {

    render(){
        return(
            <div className="postStyle">
                <h2> {this.props.postObj.caption} </h2>
                <Link to={`/viewPost/${this.props.postObj.code}`}>
                    <img src={this.props.postObj.display_src} height="100px" width="100px"/>
                </Link>
                <button type="button" className="btn btn-primary" 
                        onClick={this.props.incrementLikes.bind(this,this.props.index)}>
                        {this.props.postObj.likes} &nbsp; 
                        <span className="glyphicon glyphicon-thumbs-up" />
                </button>
            </div>
        );
    }
}