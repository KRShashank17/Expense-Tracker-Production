import React , {useEffect, useState} from 'react';
import {Form, Input, Modal, Select, message} from 'antd'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import Spinner from '../components/Spinner'

const HomePage = () => {
  const [showModal , setShowModal] = useState(false);
  const [loading , setLoading] = useState(false);
  const [allTransaction , setAllTransaction] = useState([]);   // empty array

  const submitHandler = async(values)=>{
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      await axios.post('/transactions/add-transaction' , {...values , userid : user._id});
      setLoading(false);
      message.success("Transaction Added Successfully")
      setShowModal(false);

    } catch (error) {
      setLoading(false);
      message.error("Failed to Add Transaction");
    }
  }

  const getAllTransactions = async() => {
    try {
      const user = JSON.parse(localStorage.getItem('user'));
      setLoading(true);
      const res = await axios.post('/transactions/get-transaction', {userid : user._id});
      setLoading(false);
      setAllTransaction(res.data);
      console.log(res.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Failed to Fetch Transaction");
    }
  }

  useEffect( ()=>{
    getAllTransactions();
  } , [])

  return (
    <Layout>
      {loading && <Spinner />}
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
                  <Select.Option value="bill">Bill</Select.Option>
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