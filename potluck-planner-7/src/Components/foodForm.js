import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const FoodForm = () => {

    const [formValues, setFormValues] = useState([{ foodType: '', foodItem: ''}]);

    const submit = () => {
        const newFoodList = {
            foodType: formValues.foodType,
            foodItem: formValues.foodItem,
        }
        return newFoodList;
    }

    const handleSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    let handleChange = (i, evt) => {
        let newFormValues = [...formValues];
        newFormValues[i][evt.target.name] = evt.target.value;
        setFormValues(newFormValues);
    }

    let addFormField = () => {
        setFormValues([...formValues, { foodItem: ''}])
    }

    let removeFormField = (item) => {
        let newFormValues = [...formValues];
        newFormValues.splice(item, 1);
        setFormValues(newFormValues)
    }


    return (
        <form className='form-page' onSubmit={handleSubmit}>
            <div>
            <h2>What food do you want at your potluck?</h2>
            </div>
            <div className='form'>
                <div>
                    <label>
                        <select className='type-dropdown' value={formValues.foodType} onChange={handleChange}name='foodType'>
                            <option value='' >--Select Type--</option>
                            <option value='main-course'>Main Course</option>
                            <option value='appetizer'>Appetizer</option>
                            <option value='side-dish'>Side Dish</option>
                            <option value='beverage'>Beverage</option>
                            <option value='dessert'>Dessert</option>
                        </select>
                    </label>
                    <label>
                    <input 
                        type='text'
                        value={formValues.foodItem}
                        name='foodItem'
                        onChange={handleChange}
                        placeholder='Hamburgers'
                    />
                    </label>
                </div>
            {formValues.map((item, index) => (
                <div className='form-input' key={index}>
                    <label>
                        <select className='type-dropdown' value={formValues.foodType} onChange={handleChange} name='foodType'>
                            <option value=''>--Select Type--</option>
                            <option value='main-course'>Main Course</option>
                            <option value='appetizer'>Appetizer</option>
                            <option value='side-dish'>Side Dish</option>
                            <option value='beverage'>Beverage</option>
                            <option value='dessert'>Dessert</option>
                        </select>
                    </label>
                    <label>
                    <input 
                        type='text'
                        value={formValues.foodItem}
                        name='foodItem'
                        onChange={handleChange}
                        placeholder='Dish'
                    />
                    </label>
                    {
                        index ? 
                        <button type="button"  className="button remove" onClick={() => removeFormField(index)}>Delete</button> 
                        : null
                    }

                </div>
                ))}
                </div>
                <div className='button-section'>
                    <button className="button add" type="button" onClick={() => addFormField()}>Add Item</button>
                    <Link to='./guests' className='formLink'>Invite Guests</Link>
                </div>

        </form>
    )


}

export default FoodForm;