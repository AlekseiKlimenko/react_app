// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './redux/store';
import router from './route';

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
