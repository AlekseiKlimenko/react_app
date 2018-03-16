import { createStore, combineReducers, applyMiddleware } from 'redux';
import contacts from '../reducers/contacts';
import logger from '../fitches/middleware/logger'

const reducers = combineReducers({
    contacts
});

const store = createStore(
    reducers,
    applyMiddleware(logger)
);

export default store;