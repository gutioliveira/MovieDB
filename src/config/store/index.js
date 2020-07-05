import { createStore, applyMiddleware } from 'redux';

const ReduxThunk = require('redux-thunk').default;

import moviesReducer from './redurcers/moviesReducer';

const store = createStore(moviesReducer, applyMiddleware(ReduxThunk));

export default store;
