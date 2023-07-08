import React, {useContext, useState} from "react";
import {AppContext} from '../context/AppContext';
import EditBudget from './EditBudget';
import ViewBudget from "./ViewBudget";

const Budget = () => {
    /* will use the value from AppContext */
    const { budget, dispatch } = useContext(AppContext);
    const [isEditing, setIsEditing] = useState(false);
    
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
        setIsEditing(false);
    };

    return (
        <div className = 'alert alert-light p-3 d-flex align-items-center justify-content-between'>
            {isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
        </div>
    );
};

export default Budget