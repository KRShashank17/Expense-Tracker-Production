import React , {useState} from 'react'
import {Form, Input , message} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Spinner from '../components/Spinner'

const Login = () => {
    const [loading , setLoading] = useState(false);
    const navigate = useNavigate;
    // on submit
    const submitHandler = async(values)=>{
      try {
        setLoading(true);
        const {data} = await axios.post("/users/login" , values);
        setLoading(false);
        message.success("Login Successful");
        localStorage.setItem("user", JSON.stringify({...data , passoword:''}));
        navigate("/");
      } catch (error) {
        setLoading(false);
        message.error("Incorrect Username or Password");
      }
    }
    
      return (
        <>
        {loading && < Spinner/>}

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