export default function comments(defaultStore=[],action) {
    switch(action.type){

        case 'FETCH_COMMENTS':
            console.log('withing FETCH_COMMENTS action');
            defaultStore = action.response.data;
            console.log(defaultStore);
        return defaultStore;
        
            case 'ADD_COMMENT':
            console.log(action);
            console.log('within comments reducer');
        return defaultStore;
        
            default:
        return defaultStore;
    }
}