
export const SERVER_RESPONSE = 'SERVER_RESPONSE'
export const SET_IS_LOADING = 'SET_IS_LOADING'

export function serverRequest() {
    return async function(dispatch) {
        dispatch(setIsLoading(true));
        const res = await fetch('https://nztodo.herokuapp.com/api/task/?format=json');
        const data = await res.json();
        dispatch(serverResponse(data));
        dispatch(setIsLoading(false));
    }
}

export function serverResponse(todos) {
    return { type: SERVER_RESPONSE, payload: todos }
}

export function setIsLoading(isLoading) {
    return { type: SET_IS_LOADING, payload: isLoading } 
}