import React from 'react';

export default class MainComponent extends React.Component{

    // AJAX call - to get posts and comments from server
    componentDidMount(){
        this.props.fetchPostData();
        this.props.fetchCommentsData();
    }

    render(){
        return( 
            <div>
                <h1> Main Component Loaded </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}