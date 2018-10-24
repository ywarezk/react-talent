
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(thunk)));