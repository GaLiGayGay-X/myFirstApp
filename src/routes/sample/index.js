import React from 'react';
import PropTypes from 'prop-types';
import {routerRedux} from 'dva/router'
import {connect} from 'dva';
import List from './List';
import Head from './Head';
import AddModal from './addModal'

const Sample = ({location, dispatch, sample, loading}) => {
  const {list, selectedRowKeys, modalVisible, modalType, currentItem} = sample;

  const listProps = {
    dataSource: list, // table的dataSource属性
    loading: loading.effects['sample/query'], // dva-loading的加载的插件
    location,
    rowSelection: {// table的列表前的复选框
      selectedRowKeys,
      type: 'radio',
    },
    onEditItem: (params) => {
      console.log(params);
      dispatch({
        type: 'sample/showModal',
        payload: {
          currentItem: params,
          modalType: 'edit'
        },
      });
    },
    onRemoveItem: (id) => {
      if (confirm('确定删除该条数据？')) {
        dispatch({
          type: 'sample/remove',
          payload: id,
        });
      }

    }
  };
  const modalProps = {
    visible: modalVisible,
    title: modalType === 'add' ? '新增' : '更新',
    item: modalType === 'add' ? {} : currentItem,
    onOk(params) {
      console.log(params);
      dispatch({
        type: `sample/${modalType}`,
        payload: params
      });
    },
    onCancel() {
      dispatch({
        type: 'sample/hideModal'
      })
    }
  };
  const headPropers = {
    addModalEnum() {
      dispatch({
        type: 'sample/showModal',
        payload: {
          modalType: 'add'
        }
      })
    },
    searchFn() {
      dispatch({})
    }
  };
  return (
    <div>
      <Head  {...headPropers}/>
      <List {...listProps} />
      {modalVisible && <AddModal {...modalProps}/>}
    </div>
  );
};
Sample.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
};
export default connect(({sample, loading}) => ({sample, loading}))(Sample);
