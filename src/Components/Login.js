import React, { useState } from 'react'
import axios from "axios";
import { useHistory, Link } from 'react-router-dom';

const Login = () => {
    const initialState = {
        username: '',
        password: ''
    };

    const [credentials, setCredentials] = useState(initialState);
    const { push } = useHistory();

    const submitHandle = e => {
        e.preventDefault();
        axios.post(`https://lambda-build-week.herokuapp.com/organizers/login`, credentials)
            .then( resp => {
                console.log(resp);
                const { token, username } = resp.data
                localStorage.setItem('token', token)
                localStorage.setItem("username", username);
                push('/homepage')
            })
            .catch(err => {
                console.log(err)
            })
    }

      const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({
          ...credentials,
          [name]: value,
        });
      };

    return (
        <div className='login'>
            <form onSubmit={submitHandle}>
                <label>Username:
                    <input 
                        type='text'
                        name='username'
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder='Enter username'
                    />
                </label>
                <label>Password:
                    <input 
                        type='password'
                        name='password'
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder='Enter password'
                    />
                </label>
                <button type='submit' className='submit'>Login</button>
                <Link to='/signup' className='formLink'>Signup Now</Link>
            </form>
        </div>
    )
}

export default Login
