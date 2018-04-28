import dva from 'dva';
import './index.css';
import createLoading from 'dva-loading';
import {browserHistory} from 'dva/router'

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  history: browserHistory

});

// 2. 加载插件Plugins
// app.use({});

// 3. 注册Model
app.model(require('./models/enumManager'));

// 4. 配置Router
app.router(require('./router'));

// 5. Start
app.start('#root');
