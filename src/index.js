import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import contextProvider from './contexts/ContextProvider'


ReactDOM.render(
<contextProvider>
<App/>
</contextProvider>, document.getElementById('root'))