import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import { injectGlobal } from 'styled-components';
import Reset from 'styled-reset';

import App from './App';
import AddFriendForm from './AddFriendForm';

injectGlobal`
html, body {
    ${Reset}
    overflow: hidden;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 62.5%;
}
`


ReactDOM.render(
<Router>
    <div>
        <Route exact path={'/'} component={App}  />
        <Route path={'/add-friends'} component={AddFriendForm} />
    </div>
</Router>
, document.getElementById('root'));

