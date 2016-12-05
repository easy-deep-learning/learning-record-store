import React from 'react';
import ReactDOM from 'react-dom';

import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import {
  StatementPage,
  StatementsListPage
} from './pages';


import App from './App';

ReactDOM.render((
    <Router history={browserHistory}>

      <Route path="/" component={App}>

        <Route path="/statements" component={StatementsListPage}/>
        <Route path="/statements/:id" component={StatementPage}/>

      </Route>

    </Router>
  ), document.getElementById('root')
);
