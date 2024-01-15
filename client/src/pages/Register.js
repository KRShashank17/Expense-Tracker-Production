import React from 'react'
import {Form, Input} from 'antd'
import { Link } from 'react-router-dom'

const Register = () => {

  // on submit
  const submitHandler = (values)=>{
    console.log(values);
  }

  return (
    <>
      <div className='register-style'>
        <Form layout='vertical'  onFinish={submitHandler}>
          <h1>Register</h1>
          <Form.Item label="Name" name="name">
            <Input placeholder='Name' />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder='EMAIL' type='email'/>
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder='PASSWORD' type='password'/>
          </Form.Item>

          <div className='d-flex justify-content-between'>
            <Link to={"/login"}>Already registered ? LOGIN</Link>
            <button className='btn btn-primary'>Register</button>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Register