// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Link } from 'react-router-dom';
// import Game from './components/game.component'
import router from './route';

import store from './redux/store';

const render = (Component) =>
    ReactDOM.render(
        <Provider store={store}>
            <AppContainer>
                <Component/>
            </AppContainer>
        </Provider>,
        document.getElementById('app')
    );

render(router);

if (module.hot) {
    module.hot.accept(router, () => {
        require(router),
        render(router);
    });
}
