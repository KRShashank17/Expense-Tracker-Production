import React from 'react'
import {Form, Input} from 'antd'
import { Link } from 'react-router-dom'

const Login = () => {
    
    // on submit
    const submitHandler = (values)=>{
        console.log(values);
      }
    
      return (
        <>
          <div className='register-style'>
            <Form layout='vertical'  onFinish={submitHandler}>
              <h1>LOGIN</h1>
              <Form.Item label="Email" name="email">
                <Input placeholder='EMAIL' type='email'/>
              </Form.Item>
              <Form.Item label="Password" name="password">
                <Input placeholder='PASSWORD' type='password'/>
              </Form.Item>
    
              <div className='d-flex justify-content-between'>
                <Link to={"/register"}>Not a user? REGISTER</Link>
                <button className='btn btn-primary'>LOGIN</button>
              </div>
            </Form>
          </div>
        </>
      )
}

export default Login