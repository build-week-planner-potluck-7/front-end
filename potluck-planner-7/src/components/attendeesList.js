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
    const { eventList } = props // fix it later?


    const change = (name, value) => {
        setFormValues({
            ...formValues,
            [name] : value,
        })
    }
    
    const onChange = (evt) => {
        const { name, value } = evt.target;
        change(name, value);
    }
    
    const submit = () => {
        const newAttendee = {
            event_name: formValues.event_name,
            first_name: formValues.first_name,
            last_name: formValues.last_name,
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
        history.push('/foodForm') // Go to food form to pick what food is the user bringing
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
                value={formValues.event_name}
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
                value={formValues.first_name} // fix this line later
                onChange={onChange}
                placeholder='First name'
                />
            </label>
            <label>
                Last name:
                <input 
                name='last_name'
                type='text'
                value={formValues.last_name} // fix this line later
                onChange={onChange}
                placeholder='Last name'
                />
            </label>
            <label>
                Email:
                <input
                name='email'
                type='email'
                value={formValues.email} // fix this line later
                onChange={onChange}
                placeholder='Email address'
                />                
            </label>
            
            <button type='submitButton' onSubmit={onSubmit}>Next</button>
            </form>
        </div>
    )
}