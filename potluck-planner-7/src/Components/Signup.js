import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from "react-router";

const Signup = () => {
    const initialState = {
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
            push('/homepage') 
            axios.post(`https://lambda-build-week.herokuapp.com/organizers/login`, credentials)
              .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('role', res.data.user.role)
                console.log(res.data);
                push('/') 
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
        <div>
            <div>
                <h2>Signup Form</h2>
            </div>
          <form onSubmit={handleSubmit}>
              <label>
                <input 
                  type='text'
                  name='username'
                  value={credentials.username}
                  onchange={handleChange}
                />
              </label> 
              <label>
                <input 
                  type='password'
                  name='password'
                  value={credentials.password}
                  onchange={handleChange}
                />
              </label>
              <label>
                <select name='role' value={credentials.role} onChange={handleChange}>
                  <option >Host</option>
                  <option >Guest</option>
                </select>
              </label>
              <button type='clearButton' onClick={clearForm}>Clear</button>
              <button type='submitButton'>Submit</button>
          </form>
        </div>
    )
}

export default Signup
