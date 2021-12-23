import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';



const initialFormValues= {
    guest_name: '',
    guest_email: '',
}
const initialGuests = []


export default function GuestForm() {
const history = useHistory()
const [formValues, setFormValues] = useState([initialFormValues]);
const [guests, setGuests] = useState(initialGuests)



const getGuests = () => {
    axios.get('')
        .then(resp => {
            setGuests(resp.data)
        }).catch(err => console.error(err))
}

const postGuests = newGuests => {
    axios.post('', newGuests)
        .then(resp => {
            setGuests([ resp.data, ...guests])
        }).catch(err => console.error(err))
}

const handleSubmit = evt => {
    evt.preventDefault()
    history.push('/')
    submit();
}

let handleChange = (i, evt) => {
    let newFormValues = [...formValues];
    newFormValues[i][evt.target.name] = evt.target.value;
    setFormValues(newFormValues);
}
const onChange = (evt) => {
    const {name, value} = evt.target
    handleChange(name, value)
}

let addFormField = () => {
    setFormValues([...formValues, {initialFormValues}])
}


let removeFormField = (item) => {
    let newFormValues = [...formValues];
    newFormValues.splice(item, 1);
    setFormValues(newFormValues)
}

const submit = () => {
    const newGuestList = {
        guest_name: formValues.guest_name.trim(),
       guest_email: formValues.guest_email.trim(),
    }
    postGuests(newGuestList);
}

useEffect(() => {
    getGuests()
}, [])




return(
    <form onSubmit={handleSubmit}> 
    {formValues.map((item, index) => (
        <div className='form' key={index}>
        <label>Guest Name
            <input
                value={formValues.guest_name}
                onChange={onChange}
                name='guest_name'
                type='text'
            />
        </label>
        <label>Guest Email
            <input
                value={formValues.guest_email}
                onChange={onChange}
                name='guest_email'
                type='text'
                placeholder='enter email'
            />
        </label>
            {
                index ? 
                <button type="button"  className="button remove" onClick={() => removeFormField(index)}>Delete</button> 
                : null
            }
        </div>
        ))}
        <button className="button add" type="button" onClick={() => addFormField()}>Add Another Guest</button>
        <button type='submitButton' className='submit' onSubmit={handleSubmit}>Submit Event</button>
       
    </form>
    )
}