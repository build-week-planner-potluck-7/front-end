import React, {useState, useEffect} from 'react';
// import './App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';



const initialFormValues= {
    organizer_id: '',
    event_name: '',
    description: '',
    event_date: '',
    event_time: '',
    location: ''
}
const initialEvents = []


export default function EventForm() {

const [events, setEvents] = useState(initialEvents)
const [formValues, setFormValues] = useState(initialFormValues)

const getEvents = () => {
    axios.get('https://lambda-build-week.herokuapp.com/potlucks')
        .then(resp => {
            setEvents(resp.data)
        }).catch(err => console.error(err))
}

const postNewEvent = newEvent => {
    axios.post('https://lambda-build-week.herokuapp.com/potlucks', newEvent)
        .then(resp => {
            setEvents([ resp.data, ...events])
        }).catch(err => console.error(err))
}



const inputChange = (name, value) => {
    setFormValues({...formValues, [name]:value})
}

const onChange = evt =>{
    const {name, value} = evt.target
    inputChange(name, value)
}
const submitForm = () => {
    const newEvent = {
       organizer_id: formValues.organizer_id.trim(),
       event_name: formValues.event_name.trim(),
       description: formValues.description.trim(),
       event_date: formValues.event_date,
       event_time: formValues.event_time,
       location: formValues.location
    }
    postNewEvent(newEvent)
}

const onSubmit = evt => {
    evt.preventDefault()
    submitForm()
}

useEffect(() => {
    getEvents()
}, [])




return(
    <form onSubmit={onSubmit}> 
        <div className='form'>
        <label>Organizer
            <input
                value={formValues.organizer_id}
                onChange={onChange}
                name='organizer_id'
                type='text'
                placeholder='Enter your name'
            />
        </label>
        <label>Event Name
            <input
                value={formValues.event_name}
                onChange={onChange}
                name='event_name'
                type='text'
                placeholder='Enter event name'
            />
        </label>
        <label>Event Description
            <input
                value={formValues.description}
                onChange={onChange}
                name='description'
                type='text'
                placeholder='Enter event description'
            />    
        </label>
        <label>Event Date
            <input
                value={formValues.event_date}
                onChange={onChange}
                name='event_date'
                type='date'
            />
        </label>
        <label>Event Time
            <input
                value={formValues.event_time}
                onChange={onChange}
                name='event_time'
                type='time'
            />
        </label>
    
        <label>Location
            <input
                value={formValues.location}
                onChange={onChange}
                name='location'
                type='text'
                placeholder='Enter event location'
            />
        </label>
        <Link to='./foodForm' className='formLink' onClick={submitForm}>Add Food</Link>
        </div>
    </form>
    )
}