import React from 'react';
import PostDetailComponent  from "./postdetails.component";
import CommentComponent from "./comment.component";

export default class SingleComponent extends React.Component{
    render(){

        // get URL param
        var postCodeFromURL = this.props.params.codeId;

        // get index of post item that is clicked/selected
        var index = this.props.myposts.findIndex((post,i) => post.code == postCodeFromURL);
        //console.log(index);

        // get the whole post object whch i sselected
        var currentPostObj = this.props.myposts.find((post,i) => {
            if(post.code == postCodeFromURL){
                return true;
            }
        });

        //get specific comment arry obj frm the whole comments obj
        var commentsArrForCurrentPost = this.props.mycomments[postCodeFromURL] || [];

        var commentsListToBeDisplayed = commentsArrForCurrentPost.map((comment,idx) => {
                return <CommentComponent cmntObj={comment} key={idx}/>
        });

        return (
            <div>
                <PostDetailComponent  key={index} index={index} postObj={currentPostObj}{...this.props}/>
                <hr/>
                { commentsListToBeDisplayed }
            </div>
        );
    }
}