import axios from 'axios';

export function incrementLikes(index){
    return{
        type:'INCREMENT_LIKES',
        index: index
    }
}

export function decrementLikes(){
    return{
        type:'DECREMENT_LIKES'
    }
}

export function addComment(username,msg){
    return{
        type:'ADD_COMMENT',
        user: username,
        comment: msg
    }
}

export function fetchPostData(){
    //make axios request to fetch
    var promiseObj = axios.get('http://localhost:7770/api/posts');

    return (dispatch) => {
        promiseObj.then((response) => {
            dispatch({ type:'FETCH_POSTS', response });
        })
    }
}

export function fetchCommentsData(){
    //make axios request to fetch
    var promiseObj = axios.get('http://localhost:7770/api/comments');

    return (dispatch) => {
        promiseObj.then((response) => {
            dispatch({ type:'FETCH_COMMENTS', response });
        })
    }
}
