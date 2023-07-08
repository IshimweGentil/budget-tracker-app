import React from 'react';

const ViewBudget = (props) => {
    return (
        <>
        <span>Budget: ${props.budget}</span>
        <button type = 'button' class = 'btn-primary' onClick = {props.handleEditClick}>
            Edit
        </button> {/** creates the edit button  */}
        </>
    );
};

export default ViewBudget;
