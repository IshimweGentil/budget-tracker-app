import React, {useContext, useState} from "react";
import { AppContext } from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';

const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const expense = {
            id: uuidv4(), // generates an id for each item
            name,
            cost: parseInt(cost)
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense,
        });

        setName('');
        setCost('');

    }; 
    // checks if button was fired, then onSubmit is called and alerts the values entered

        return (
            <form onSubmit={onSubmit}>
                <div className = "row">
                    <div className = "col-sm">
                        <label for = "name">Name</label>

                        {/* creates name input and gives it the id 'name' */}
                        <input
                            required = "required"
                            type = "text" 
                            className = "form-control" 
                            id = "name"

                            value = {name}
                            onChange = {(event) => setName(event.target.value)}
                        // saves objects entered in the 'name' as name objects 
                        />
                    </div>

                    <div className = "col-sm">
                        <label for = "cost">Cost</label>
                        {/* creates cost input and gives it the id 'cost' */}
                        <input
                            required = "required"
                            type = "number" 
                            className = "form-control" 
                            id = "cost"

                            value = {cost} 
                            onChange = {(event) => setCost(event.target.value)}
                            // saves objects entered in the 'cost' as cost objects 
                            />
                    </div>
                    {/* creates the save button*/}
                    <div className="col-sm">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        );
    };
export default AddExpenseForm;