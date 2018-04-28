import React from 'react';
import PropTypes from 'prop-types';
import {Table, Button} from 'antd';
import {Link} from 'react-router-dom';


const List = ({
                ...listProps, onEditEnum, onDeleteEnum
              }) => {
  const updateEnum = (record, e) => {
    onEditEnum(record);
  };
  const deleteEnum = (record, e) => {
    onDeleteEnum(record.id);
  }
  const columns = [
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    }, {
      title: '枚举类型',
      dataIndex: 'enumType',
      key: 'enumType',
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
        {...listProps}
        bordered
        scroll={{x: 700}}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    </div>
  )
};

List.propTypes = {
  location: PropTypes.object,
  onRemoveItem: PropTypes.func,
  onEditItem: PropTypes.func,
};

export default List;

