import React from 'react';
import PostDetailComponent  from "./postdetails.component";

export default class AllPostComponent extends React.Component{

    render(){

        var postsToBeDisplayed = this.props.myposts.map(function(post,index){
            return <PostDetailComponent postObj={post}/>;
        });

        return (
            <div>
                {postsToBeDisplayed}
            </div>
        );
    }
} 