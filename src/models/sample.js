import {query, add, edit, remove} from '../services/sample';
import {message} from 'antd';

export default {
  namespace: 'sample', // 命名空间
  state: {
    modalVisible: false
  },
  subscriptions: {
    setup({dispatch, history}) {  // eslint-disable-line
      // 订阅history
      history.listen((location) => {
        if (location.pathname === '/sample') {
          dispatch({// dispatch 函数得参数为action
            type: 'query', // 如果在 此model 外调用，需要添加 namespace
            payload: {}, //  需要传递的信息
          });
        }
      });
    },
  },
// 主要写一个异步的操作 底层引入了redux-sagas做异步流程控制
  effects: {
    * query({payload}, {call, put, select}) {
      const data = yield call(query, payload);
      console.log(data);
      yield put(//大括号里面的东西相当于dispatch
        {
          type: 'save',
          payload: {
            list: data,
          },
        }
      );
    },
    * add({payload}, {call, put}) {
      const data = yield call(add, payload);
      if (data && data.data) {
        yield put({type: 'hideModal'});
        yield put({type: 'query'});
        message.success('添加成功！');
      } else {
        throw data
      }
    },
    * edit({payload}, {select, call, put}) {

      const data = yield call(edit, payload);
      if (data && data.data) {
        yield put({type: 'hideModal'});
        yield put({type: 'query'});
        message.success('更新成功！');
      } else {
        throw data
      }
    },
    * remove({payload: id}, {call, put}) {
      console.log(id);
      const data = yield call(remove, id);
      if (data && data.data) {
        yield put({type: 'query'});
        message.success('删除成功！');
      } else {
        throw data
      }
    }
  },
  reducers: {

    save(state, {payload}) {
      return {...state, ...payload};
    },
    showModal(state, {payload}) {
      return {...state, ...payload, modalVisible: true};
    },
    hideModal(state) {
      return {...state, modalVisible: false};
    }

  },

};
