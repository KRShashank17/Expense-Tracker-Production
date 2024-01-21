import React , {useState} from 'react';
import {Form, Input, Modal, Select} from 'antd'
import Layout from '../components/Layout/Layout'

const HomePage = () => {
  const [showModal , setShowModal] = useState(false)
  const submitHandler = (value)=>{
    console.log(value);
  }
  return (
    <Layout>
        <div className="filters">
          <div >Range Filters</div>
          <div >
            <button className='btn btn-primary' 
            onClick={()=>setShowModal(true)}>Add New</button>
          </div>

        </div>
        <div className="content"></div>

        <Modal 
        title= "Add Transaction"
        open={showModal}
        onCancel={()=>setShowModal(false)}
        footer={null}
        >
            <Form layout='vertical' onFinish={submitHandler}>
              <Form.Item name="amount" label="Amount">
                <Input type='text'/>
              </Form.Item>
              <Form.Item name="type" label="Type">
                <Select >
                  <Select.Option value="income">Income</Select.Option>
                  <Select.Option value="expense">Expense</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="category" label="Category">
              <Select >
                  <Select.Option value="food">Food</Select.Option>
                  <Select.Option value="fee">Fee</Select.Option>
                  <Select.Option value="rent">Rent</Select.Option>
                  <Select.Option value="medical">Medical</Select.Option>
                  <Select.Option value="movie">Movie</Select.Option>
                  <Select.Option value="petrol">Petrol</Select.Option>
                  <Select.Option value="others">Others</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item name="reference" label="Reference">
                <Input type='text'/>
              </Form.Item>
              <Form.Item name="description" label="Description">
                <Input type='text'/>
              </Form.Item>
              <Form.Item name="date" label="Date">
                <Input type='date'/>
              </Form.Item>

              <div className="d-flex justify-content-end">
                <button className="btn btn-primary" type="submit">SAVE</button>
              </div>

            </Form>
        </Modal>
    </Layout>
  )
}

export default HomePage