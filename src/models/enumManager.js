import {query, save, edit, remove} from '../services/EnumManagerService';
import {Message} from 'antd';

export default {
  namespace: 'enumManager',
  state: {
    modalVisible: false
  },
  subscriptions: {
    setup({dispatch, history}) {
      history.listen((location) => {
        if (location.pathname === '/enumManager') {
          dispatch({
            type: 'query',
            payload: {}
          })
        }
      })
    }
  },
  effects: {
    * query({payload}, {call, put}) {
      const data = yield call(query, payload);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data
          }
        })
      }
    },
    * add({payload}, {call, put}) {
      const data = yield call(save, payload);
      if (data && data.data) {
        yield put({type: 'hideModal'});
        yield put({type: 'query'});
        Message.success("添加成功！");
      }
    },
    * edit({payload}, {call, put}) {
      console.log(payload);
      const data = yield call(edit, payload);
      if (data && data.data) {
        yield put({type: 'hideModal'});
        yield put({type: 'query'});
        Message.success("更新成功！");
      }
    },
    * remove({payload}, {call, put}) {
      const data = yield call(remove, payload);
      if (data && data.data) {
        yield put({type: 'query'});
        Message.success("更新成功！");
      }
    }
  },

  reducers: {
    querySuccess(state, {payload}) {
      return {...state, ...payload};
    },
    showModal(state, {payload}) {
      return {...state, ...payload, modalVisible: true}
    },
    hideModal(state) {
      return {...state, modalVisible: false}
    },
    updateState(state, {payload}) {
      return {...state, ...payload}
    }
  }
}
