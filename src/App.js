import * as React from 'react';

import { Provider } from 'react-redux';
import store from './config/store';

import Routes from './config/routes/index';

function App() {

    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    );
}

export default App;
