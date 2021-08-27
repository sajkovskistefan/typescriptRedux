import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {numbersReducer} from './Ducks/Reducers/NumbersReducer';
import {To_Dos_Reducer} from './Ducks/Reducers/To_Dos_Reducer';

let reducers = combineReducers({
    numbersReducer: numbersReducer,
    To_Dos_Reducer: To_Dos_Reducer
})

let middlewares = applyMiddleware(
    thunk
);

export const store = createStore(reducers,middlewares);

export type State = ReturnType<typeof reducers>