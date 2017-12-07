// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Game from './components/game.component'


// import Clock from './main';
// import AppRouter from './routes';

const render = (Component) =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );

render(Game);

if (module.hot) {
    module.hot.accept(Game, () => {
        require(Game),
        render(Game);
    });
}
