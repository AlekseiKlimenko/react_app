// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Board from './components/board.component';

// import Clock from './main';
// import AppRouter from './routes';

const render = (Component) =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );

render(Board);

if (module.hot) {
    module.hot.accept(Board, () => {
        require(Board),
        render(Board);
    });
}
