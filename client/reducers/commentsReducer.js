export default function comments(defaultStore=[],action) {
    switch(action.type){
        case 'ADD_COMMENT':
            console.log(action);
            console.log('within comments reducer');
            return defaultStore;
        default:
            return defaultStore;
    }
}