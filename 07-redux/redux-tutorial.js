

// redux main players
// store
// actions
// reducers

// actions
// simple object
// type - string identifier of action
// payload? - if action holds data to pass to state

// { type: 'SERVER_REQUEST'}
// { type: 'SERVER_RESPONSE', payload: [{title: 'task'...}] }

function serverRequest() {
    // return { type: 'SERVER_REQUEST'}

    // store.dispatch(action)
    return async function(dispatch) {
        dispatch(setIsLoading(true));
        const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const data = await res.json();
        dispatch(serverResponse(data));
        dispatch(setIsLoading(false));
    }
}

function serverResponse(todos) {
    return { type: 'SERVER_RESPONSE', payload: todos }
}

function setIsLoading(isLoading) {
    return { type: 'SET_IS_LOADING', payload: isLoading } //--> reducer
}

// reducers
// helps the store determine what the next state will be based on the action
// reducer will be a simple function, first argument is current state, second argument if the action that happened
// reducer need to return the next state. 
// function(state, action): nextState {}
// in the reducer we will have a switch statement on action.type
// if type is SET_IS_LOADING the next state isLoading should change
// the state in redux is immutable
// an immutable object is an object i cannot change
// redux state can only get an entire new state
// reducer needs to clone the state and replace certain properties in the clone
// a redux app can and usually should contain more than one reducer

let reduxState = {
    isLoading: true
}

let prev = reduxState

 // reduxState.isLoading = false;

reduxState = {
    isLoading: !prev.isLoading
}

const initialState = {
    isLoading: false, 
    todos: []
}

// we are creating a redux store
// when creating the redux store we are passing our reducer
// redux calls our reducer in the first time with state = undefined
// then state = undefined our initialState will take control state = initialState
// why ? es6 function with default value to args work like that

function todoReducer(state = initialState, action) {
    switch(action.type) {
        case 'SERVER_RESPONSE':
            return {...state, todos: action.payload};
        case 'SET_IS_LOADING':
            return {...state, isLoading: action.payload};
        default: 
            return state;
    }

}


// Store
// holds the state
// get the reducer as first argument
// Redux.combineReducers({settings: settingsReducer, user: userReducer})
// as second argument initialState?
// middlewares - gives more power to redux
// to get the current state store.getState()
// store.dispatch(action)

const store = Redux.createStore(todoReducer, Redux.applyMiddleware(ReduxThunk.default));

// middleware
// gives more power to redux
// store.dispatch
// to make redux understand async actions
// redux-thunk
// middleware that allows to return from action creator function



const button = document.getElementById('init-button');
button.addEventListener('click', function() {
    store.dispatch(serverRequest());
});


store.subscribe(function() {
    const ul = document.getElementById('task-list');
    ul.innerHTML = '';

    const todos = store.getState().todos;
    for (let item of todos) {
        const li = document.createElement('li');
        li.textContent = item.title;
        ul.appendChild(li);    
    }
})


// 1. we are clicking the button
// 2. event of the button is called
// 3. store.dispatch(serverRequest())
// 3.1  serverRequest() is called -> returns function
// 3.2 store.dispatch(function)
// 3.3 redux thunk enhanced the dispatch that if we get function we need to call it with 
// 4. serverRequest async function
// 4.1 dispatch(setIsLoading(true))
// 4.2 dispatch({type: SET_IS_LOADING, payload: true})
// 4.3 we take the action to the reducer reducer(currentState, {type: SET_IS_LOADING, payload: true}) -> nextState with isLoading: true
// 4.4 state changed
// 4.5 dispatch(serverReturned())
// goes to reducer with the action
// 4.6 dispatch(setIsLoading())
// goes to reducer with the action

