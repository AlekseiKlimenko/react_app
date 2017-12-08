// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import Game from './components/game.component'


import game from './reducers/game';
import { createStore } from 'redux';

let store = createStore(game);

const render = (Component) =>
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('app')
    );

render(Game);

if (module.hot) {
    module.hot.accept(Game, () => {
        require(Game),
        render(Game);
    });
}
