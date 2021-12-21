import React, {useState} from 'react';
import './App.css';



const initialFormValues= {
    organizer: '',
    event_name: '',
    description: '',
    event_date: '',
    event_time: '',
    location: ''
}



export default function eventForm(){

const [formValues, setFormValues] = useState(initialFormValues)

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
    return newEvent
}

const onSubmit = evt => {
    evt.preventDefault()
    submitForm()
}




return(
    <form onSubmit={onSubmit}> 
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
            />
        </label>
        <label>Event Time
            <input
                value={formValues.event_time}
                onChange={onChange}
                name='event_time'
            />
        </label>
    
        <label>Location
            <input
                value={formValues.location}
                onChange={onChange}
                name='location'
            />
        </label>
    </form>
    )
}