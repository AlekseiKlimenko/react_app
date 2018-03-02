import { createStore, combineReducers } from 'redux';

// import game from '../reducers/game';
// import list from '../reducers/list';
import contacts from '../reducers/contacts';
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    // gameState: game,
    // listState: list,
    // form: formReducer
    contacts: contacts
});

const store = createStore(reducers);

export default store;