import React, {useState, useEffect} from 'react';
// import './App.css';
import axios from 'axios';



const initialFormValues= {
    organizer: '',
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
    axios.get('')
        .then(resp => {
            setEvents(resp.data)
        }).catch(err => console.error(err))
}

const postNewEvent = newEvent => {
    axios.post('', newEvent)
        .then(resp => {
            setEvents([ resp.data, ...events])
        }).catch(err => console.error(err))
}

const onChange = (name, value) => {
    setFormValues({...formValues, [name]:value})
}
const submitForm = () => {
    const newEvent = {
       organizer: formValues.organizer.trim(),
       event_name: formValues.event_name.trim(),
       description: formValues.description.trim(),
       event_date: formValues.event_date.trim(),
       event_time: formValues.event_time.trim(),
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
                value={formValues.organizer}
                onChange={onChange}
                name='organizer'
                type='text'
            />
        </label>
        <label>Event Name
            <input
                value={formValues.event_name}
                onChange={onChange}
                name='event_name'
                type='text'
                placeholder='enter event name'
            />
        </label>
        <label>Event Description
            <input
                value={formValues.description}
                onChange={onChange}
                name='description'
                type='text'
            />    
        </label>
        <label>Event Date
            <input
                value={formValues.event_date}
                onChange={onChange}
                name='event_date'
                type='text'
            />
        </label>
        <label>Event Time
            <input
                value={formValues.event_time}
                onChange={onChange}
                name='event_time'
                type='text'
            />
        </label>
    
        <label>Location
            <input
                value={formValues.location}
                onChange={onChange}
                name='location'
                type='text'
            />
        </label>
        </div>
    </form>
    )
}