export default function posts(defaultState=[],action) {
    
    switch(action.type){
        
        case 'FETCH_POSTS':
            console.log('withing FETCH_POSTS action');
            defaultState = action.response.data;
            console.log(defaultState);
        return defaultState;

        case 'INCREMENT_LIKES':
            let postIndex = action.index;
            return [
                ...defaultState.slice(0,postIndex), //  slice the array and spread till index element
                {...defaultState[postIndex],likes:defaultState[postIndex].likes+1}, //  get the object at index and spread it and set the likes to +1
                ...defaultState.slice(postIndex+1) // let the rest of the array be same
            ];

        default:
        return defaultState;
    }
}