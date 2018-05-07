import React from 'react'
import PropTypes from 'prop-types'
import {Button, Input, Row, Col} from 'antd'

const SearchInput = Input.Search;
const Filter = ({...filterProps, addSameLevelEnum, addLowerLevelEnum}) => {
  return (
    <Row>

      <Col span={6}>
        <SearchInput placeholder="请输入枚举名称" onSearch={value => console.log(value)} enterButton/>
      </Col>

      <Col offset={6}>
        <Button type='primary' onClick={addSameLevelEnum}>新增同级枚举类型</Button>&nbsp;&nbsp;&nbsp;
        <Bu0tton type='primary' onClick={addLowerLevelEnum}>新增下级枚举类型</Bu0tton>
      </Col>
    </Row>
  )
};

export default Filter
