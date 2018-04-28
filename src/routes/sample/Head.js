import React from 'react';
import {Form, Input, Button, Select, DatePicker} from 'antd';

const FormItem = Form.Item;
const Head = ({
                addModalEnum,
                form: {
                  getFieldDecorator,
                  validateFields,
                  getFieldsValue,
                  setFieldsValue
                }
              }) => {
  const handleSubmit = () => {
    validateFields((errors) => {
      if (errors) {
        return
      } else {
        const data = {
          ...getFieldsValue()
        };
        console.log(data)
      }
    })
  };
  const handleReset = () => {
    const fidldsValues = getFieldsValue();
    for (const item in fidldsValues) {
      //hasOwnProperty返回一个boolean值，指示对象自身属性是否具有指定的属性
      if ({}.hasOwnProperty.call(fidldsValues, item)) {
        if (fidldsValues[item] instanceof Array) {
          fidldsValues[item] = [];
        } else {
          fidldsValues[item] = undefined;
        }
      }
    }
    setFieldsValue(fidldsValues);
  };
  return (
    <Form layout='inline' onSubmit={handleSubmit}>
      <FormItem>
        {getFieldDecorator('title')(
          <Input placeholder='请输入标题'/>
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('author')(
          <Input placeholder='请输入作者'/>
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('select')(
          <Select showSearch placeholder='请选择' style={{width: 200}}>
            <option value='s1'>s1</option>
            <option value='s2'>s2</option>
            <option value='s3'>s3</option>
            <option value='s4'>s4</option>
          </Select>
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('time')(
          <DatePicker plcaeholder='请选择日期'/>
        )}
      </FormItem>
      <FormItem>
        <Button type='primary' htmlType='submit'>提交</Button>
        <Button onClick={handleReset}>重置</Button>
      </FormItem>
      <Button type='primary' onClick={addModalEnum} style={{marginTop: 4}}>新增</Button>
    </Form>

  )
};
export default (Form.create()(Head));
