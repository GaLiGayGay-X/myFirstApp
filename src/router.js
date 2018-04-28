import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import IndexPage from './routes/IndexPage';
import Sample from './routes/sample';
import EnumManager from './routes/enumManager';

function RouterConfig({history}) {
  return (<Router history={history}>
    <div>
      <Route path="/" exact component={IndexPage}/>
      <Route path="/sample" component={Sample}/>
      <Route path="/enumManager" component={EnumManager}/>
    </div>
  </Router>);
}

export default RouterConfig;
