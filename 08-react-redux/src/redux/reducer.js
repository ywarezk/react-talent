import {SERVER_RESPONSE, SET_IS_LOADING} from './actions';

const initialState = {
    isLoading: false, 
    todos: []
}

export default function todoReducer(state = initialState, action) {
    switch(action.type) {
        case SERVER_RESPONSE:
            return {...state, todos: action.payload};
        case SET_IS_LOADING:
            return {...state, isLoading: action.payload};
        default: 
            return state;
    }
}