import React from 'react';
import PostDetailComponent  from "./postdetails.component";

export default class AllPostComponent extends React.Component{

    render(){

        var postsToBeDisplayed = this.props.myposts.map((post,index) => {
            return <PostDetailComponent  key={index} index={index} postObj={post}{...this.props}/>;
        });

        return (
            <div>
                <hr/>
                {postsToBeDisplayed}
            </div>
        );
    }
} 