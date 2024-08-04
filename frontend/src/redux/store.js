import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
import logger from 'redux-logger';

const store = configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})

export default store;