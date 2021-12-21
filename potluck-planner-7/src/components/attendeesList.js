import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const initialFormValues = {
    event_name: '',
    first_name: '',
    last_name:'',
    email: ''
}
const initialAttendees = []

export default function AttendeesList(props) {
    const history = useHistory()
    const [ attendees, setAttendees ] = useState(initialAttendees)
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const { eventList } = props // fix it later


    const change = (name, value) => {
        setFormValues({
            ...formValues,
            [name] : value,
        })
    }
    
    const onChange = (name, value) => {
        const { name, value } = evt.target
        change(name, value)
    }
    
    const submit = () => {
        const newAttendee = {
            eventName: formValues.event_name,
            firstName: formValues.first_name,
            lastName: formValues.last_name,
            email: formValues.email,
        }
        postNewAttendees(newAttendee)
    }
    
    const postNewAttendees = (newAttendee) => {
        setAttendees(newAttendee)
        axios.post(``, attendees) // add url later
        .then( res => {console.log(res.data)})
        .catch( err => {console.error(err)})
        .finally(setFormValues(initialFormValues))
    }
    const onSubmit = evt => {
        evt.preventDefault()
        history.push('/') // where would it go after submitting?
        submit()
    }

    

    return (
        <div className='attendees container'>
            <form id='attendees' onSubmit={onSubmit}>
            <h2>Attend our potluck</h2>
            <label>
                Select an event you want to attend:
                <select
                name='event_name'
                value={values.event_name}
                onChange={onChange}
                >
                    {
                        eventList.map(evt => {
                            return (
                                <option value={evt}>{evt}</option>
                            )
                        })
                    }
                </select>             
            </label>
            <label>
                First name:
                <input 
                name='first_name'
                type='text'
                value={values.first_name} // fix this line later
                onChange={onChange}
                placeholder='First name'
                />
            </label>
            <label>
                Last name:
                <input 
                name='last_name'
                type='text'
                value={values.last_name} // fix this line later
                onChange={onChange}
                placeholder='Last name'
                />
            </label>
            <label>
                Email:
                <input
                name='email'
                type='email'
                value={values.email} // fix this line later
                onChange={onChange}
                placeholder='Email address'
                />                
            </label>
            {/* This form needs to be able for user to choose 
                what item they'd like to be responsible or bringing */}
            <button type='submitButton' onSubmit={onSubmit}>Submit</button>
            </form>
        </div>
    )
}