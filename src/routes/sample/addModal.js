import React from 'react'
import {Form, Modal, Input} from 'antd'

const FormItem = Form.Item;
const AddModal = ({
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
      // if (item.id) {
      //   data.id=item.id;
      // } else {
      //   data.id=11
      // }
      onOk(data)
    })
  }
  return (
    <Modal {...modalProps} onOk={handleOk}>
      <Form layout="vertical">
        <FormItem label="编号">
          {getFieldDecorator('id', {initialValue: item.id})(
            <Input/>
          )}
        </FormItem>
        <FormItem label="标题">
          {getFieldDecorator('title', {initialValue: item.title})(
            <Input/>
          )}
        </FormItem>
        <FormItem label="作者">
          {getFieldDecorator('author', {initialValue: item.author})(<Input type="textarea"/>)}
        </FormItem>
      </Form>
    </Modal>
  )
};
export default ((Form.create()(AddModal)))
