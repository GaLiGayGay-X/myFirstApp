import React from 'react'
import {Form, Modal, Input} from 'antd'

const FormItem = Form.Item;
const TextArea = Input.TextArea;
const addModal = ({
                    ...modalProps,
                    onOk,
                    item,
                    form: {
                      getFieldDecorator,
                      validateFields,
                      getFieldsValue,
                    }
                  }) => {

  const handleOk = () => {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = {
        ...getFieldsValue(),
      };
      data.id = item.id;
      data.parentId = item.parentId;
      console.log(data, 'onOk');
      onOk(data)
    })
  }
  return (
    <Modal {...modalProps} onOk={handleOk}>
      <Form layout="vertical">
        <FormItem label="上级节点">
          {getFieldDecorator('parentName', {initialValue: item.parentName})(
            <Input disabled={true}/>
          )}
        </FormItem>
        <FormItem label="枚举类型">
          {getFieldDecorator('enumType', {initialValue: item.enumType})(<Input/>)}
        </FormItem>
        <FormItem label="序号">
          {getFieldDecorator('seq', {initialValue: item.seq})(<Input/>)}
        </FormItem>
        <FormItem label="枚举描述">
          {getFieldDecorator('description', {initialValue: item.description})(
            <TextArea></TextArea>
          )}
        </FormItem>

      </Form>
    </Modal>
  )
};
export default ((Form.create()(addModal)))
