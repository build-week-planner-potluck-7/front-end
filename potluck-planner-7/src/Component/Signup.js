// import axios from 'axios'
import React, { useState } from 'react'

const Signup = () => {
    const initialState = {
        username: '',
        password: ''
    }

    const [values, clearForm, handleChange] = useState(initialState);

    const handleChange = e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };
    
      const clearForm = e => {
        e.preventDefault();
        setValues(initialState);
      };

      const handleSubmit = e => {
        e.preventDefault();
        alert(`${values.firstName} ${values.lastName} : ${values.email}`);
      };

    return (
        <div>
            <div>
                <h2>Signup</h2>
            </div>
          <form onSubmit={handleSubmit}>
              <input 
                label='First Name'
                type='text'
                name='firstname'
                value={values.firstname}
                onchange={handleChange}
              />
              <input 
                label='Last Name'
                type='text'
                name='lastname'
                value={values.lastname}
                onchange={handleChange}
              />
              <input 
                label='Email'
                type='text'
                name='email'
                value={values.email}
                onchange={handleChange}
              />
              <button type='clearButton' onClick={clearForm}>Clear</button>
              <button type='submitButton'>Submit</button>
          </form>
        </div>
    )
}

export default Signup