import React, { useState, useEffect } from 'react'
import {Container, FormControl, Button,  Form  } from 'react-bootstrap'
import axios from 'axios';
import {useNavigate } from 'react-router-dom'

const logout = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPassword] = useState();
  const [email, setEmail] = useState();
  // const [isRegistred, setIsRegistred] = useState(true);

 
  // const userRegister = {

  //   username: username,
  //   email: email,
  //   password: password,
  //   confirmPass: confirmPassword
  // }

  const register = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/users/register', {

      username,
      email,
      password,
      confirmPass,
    }).then((response) => {
      console.log(response)
      setUsername('')
      setEmail('')
      setPassword('')
      setConfirmPass('')
    })

  }

  return (
    <div className="register">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>username</Form.Label>
        <Form.Control type="text" name='username' placeholder="Enter email"
        value={username}
        onChange={(e) => {setUsername(e.target.value)}}
        />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        />
     
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" 
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>confirm password</Form.Label>
        <Form.Control type="password" name="confirmPass" placeholder="Password" 
        value={confirmPass}
        onChange={(e) => {setConfirmPassword(e.target.value)}}
        />
      </Form.Group>

      <Button variant="primary" type='button'
      onClick={(e) => {
        register(e)
        navigate('/login')
      }
        
      }
      >
        Submit
      </Button>
      {/* <br />
        <br />
        <Button variant="primary" type="submit"
        onClick={() => {setIsRegistred(true)}}
        >
          login
        </Button> */}
    </Form>
    </div>
  )
}

export default logout