import React from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';
import {Link} from 'react-router-dom';

const List = ({...tableProps, onRemoveItem, onEditItem}) => {
  const deleteEnum = (record, e) => {
    onRemoveItem(record.id);
  };
  const updateEnum = (record, e) => {
    onEditItem(record);

  }
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: text => (<span>{text}</span>)
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
      align: 'center'
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <buttonGroup>
          <Button onClick={e => updateEnum(record, e)}> 更新 </Button>
          <Button onClick={e => deleteEnum(record, e)}> 删除 </Button>
        </buttonGroup>
      ),
    }
  ];
  return (
    <div>
      <Table
        style={{width: '100%'}}
        {...tableProps}
        bordered
        scroll={{x: 700}}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    </div>
  );
};
List.propTypes = {// 类型的校验，如果没有的话，页面会报警告
  location: PropTypes.object,
  onRemoveItem: PropTypes.func,
  onEditItem: PropTypes.func,
};
export default List;
