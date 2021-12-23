import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const Signup = () => {
    const initialState = {
        firstName: '',
        lastName: '',
        email_Address: '',
        username: '',
        password: '',
        role: ''
    }

    const [credentials, setCredentials] = useState(initialState);
    const { push } = useHistory();
    const handleSubmit = e => {
        e.preventDefault();
        axios.post(`https://lambda-build-week.herokuapp.com/organizers/register`, credentials)
          .then(res => {
            console.log(res.data);
            push('/') 
            axios.post(`https://lambda-build-week.herokuapp.com/organizers/login`, credentials)
              .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('role', res.data.user.role)
                console.log(res.data);
                push('/homepage') 
              })
              .catch(err => {
                console.log(err);
              })
          })
      };

      const clearForm = e => {
        e.preventDefault();
        setCredentials(initialState);
      };

      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
          ...credentials,
          [name]: value,
        });
      };

    return (
        <div className='signup'>
            <div>
                <h2>Create Account</h2>
            </div>
          <form onSubmit={handleSubmit}>
          <div className='form'>
              <label>First Name:
                <input 
                  type='text'
                  name='firstName'
                  value={credentials.firstName}
                  onChange={handleChange}
                  placeholder='Enter firstName'
                />
              </label>
              <label>Last Name:
                <input 
                  type='text'
                  name='lastName'
                  value={credentials.lastName}
                  onChange={handleChange}
                  placeholder='Enter lastName'
                />
              </label>
              <label>Email:
                <input 
                  type='text'
                  name='email_Address'
                  value={credentials.email_Address}
                  onChange={handleChange}
                  placeholder='Enter email address'
                />
              </label>
              <label>Username:
                <input 
                  type='text'
                  name='username'
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder='Enter Username'
                />
              </label> 
              <label>Password:
                <input 
                  type='password'
                  name='password'
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder='Enter Password'
                />
              </label>
              <label>
                <select name='role' value={credentials.role} onChange={handleChange}>
                  <option >Host</option>
                  <option >Guest</option>
                </select>
              </label>
              </div>
              <button type='clearButton' className='remove' onClick={clearForm}>Clear</button>
              <button type='submitButton' className='submit' >Submit</button>
          </form>
        </div>
    )
}
export default Signup;