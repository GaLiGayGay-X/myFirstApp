import React from 'react';
import PropTypes from 'prop-types';
import {routerRedux} from 'dva/router';
import {connect} from 'dva';
import {Popconfirm, Message} from 'antd'
import List from './List';
import {arrayToTree} from '../../utils'
import Filter from './filter'
import AddModal from './addModal'
import queryString from 'query-string'

const EnumManager = ({location, dispatch, enumManager, loading}) => {
  location.query = queryString.parse(location.search);//queryString:序列化一个对象为string或反序列化为一个对象，自定义url分隔符
  const {query, pathname} = location;
  console.log(location, 'location');
  const {list, selectedRows, currentItem, modalVisible, modalType} = enumManager;

  //控制给Modal传值参数
  let item = {};
  let title = "";
  if (modalType === "edit") {
    title = "修改枚举类型";
    item = Object.assign({}, currentItem);
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].id === currentItem.parentId) {
          item.parentName = list[i].description;
        }
      }
    }
  } else if (modalType === "addLowerLevel") {
    title = "新增下级枚举类型";
    item.parentId = selectedRows.id;
    item.parentName = selectedRows.description;
  } else {
    title = "新增同级枚举类型";
    if (selectedRows) {
      item.parentId = selectedRows.parentId;
      if (list) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].id === selectedRows.parentId) {
            item.parentName = list[i].description;
          }
        }
      }
    } else {
      item.parentId = "root";
    }
  }
  ;

  const handleRefresh = (newQuery) => {
    dispatch(routerRedux.push({
      pathname,
      search: queryString.stringify({
        ...query,
        ...newQuery
      })
    }))
  }

  const listProps = {
    dataSource: list ? arrayToTree(list, 'id', 'parentId') : [],
    loading: loading.effects['enumManager/query'],
    location,
    rowSelection: {
      type: 'radio',
      onChange: (key, row) => {
        dispatch({
          type: 'enumManager/updateState',
          payload: {
            selectedRows: row[0]
          }
        })
      }
    },
    onEditEnum: (params) => {
      console.log(params);
      dispatch({
        type: 'enumManager/showModal',
        payload: {
          currentItem: params,
          modalType: 'edit'
        }
      })
    },
    onDeleteEnum: (id) => {
      if (confirm("确定删除该条数据吗？")) {
        dispatch({
          type: 'enumManager/remove',
          payload: id
        })
      }
    }
  };

  const modalProps = {
    visible: modalVisible,
    title: title,
    item: item,
    onOk(params) {
      console.log(modalType, params);
      if (modalType === "edit") {
        dispatch({
          type: 'enumManager/edit',
          payload: params
        })
      } else {
        dispatch({
          type: 'enumManager/save',
          payload: params
        })
      }

    },
    onCancel() {
      dispatch({
        type: 'enumManager/hideModal'
      })
    }
  };

  const filterProps = {
    addSameLevelEnum() {
      console.log(selectedRows);
      dispatch({
        type: 'enumManager/showModal',
        payload: {
          modalType: 'addSameLevel',
        }
      })
    },
    addLowerLevelEnum() {
      if (selectedRows) {
        console.log(selectedRows);
        dispatch({
          type: 'enumManager/showModal',
          payload: {
            modalType: 'addLowerLevel'
          }
        })
      } else {
        Message.warn("请先选择一条数据");
      }
    }
  };
  return (
    <div>
      <Filter {...filterProps}/>
      <List {...listProps}/>
      {modalVisible && <AddModal {...modalProps}/>}
    </div>
  )
};
EnumManager.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
  enumManager: PropTypes.object,
};
export default connect(({enumManager, loading}) => ({enumManager, loading}))(EnumManager)
