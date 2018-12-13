import React from 'react';
import { Router} from 'dva/router';


import config from "./RouterView/router";
import RouterView from "./RouterView/RouterView"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <React.Fragment>
        <RouterView routes={config.routes}></RouterView>
      </React.Fragment>
    </Router>
  );
}

export default RouterConfig;
