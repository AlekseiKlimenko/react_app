// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Clock from './main';

// import AppRouter from './routes';

// ReactDOM.render(<AppRouter />, document.getElementById("app"));

const render = (Component) =>
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app')
    );

render(Clock);

if (module.hot) {
    module.hot.accept('./main', () => {
        require('./main'),
        render(Clock);
    });
}
