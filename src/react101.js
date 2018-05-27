import {createStore} from 'redux';

const store = createStore((state = {count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy ? action.incrementBy : 1
            }
            break;
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type:'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type:'DECREMENT'
});