import { createStore, combineReducers } from 'redux';

import game from '../reducers/game';
import list from '../reducers/list';

const reducers = combineReducers({
    gameState: game,
    listState: list
});

const store = createStore(reducers);

export default store;