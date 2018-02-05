export default function comments(defaultState=[],action) {
    switch(action.type){

        case 'FETCH_COMMENTS':
            console.log('withing FETCH_COMMENTS action');
            defaultState = action.response.data;
            console.log(defaultState);
        return defaultState;
        
            case 'ADD_COMMENT':
            console.log(action);
            console.log('within comments reducer');
        return defaultState;
        
            default:
        return defaultState;
    }
}