export default function posts(defaultStore=[],action) {
    
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log(action);
            console.log('within posts reducer');
            return defaultStore;
        default:
            return defaultStore;
    }
}