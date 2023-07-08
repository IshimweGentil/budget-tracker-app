import React, {useContext ,useState, useEffect} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    /* will use the value from AppContext */
    const { expenses } = useContext(AppContext);

    return (
    /* returning the list*/
        <ul className = "list-group ">
            {expenses.map(((expense) => (
                <ExpenseItem 
                id = {expense.id} 
                name = {expense.name}
                cost = {expense.cost}
                />
                /* Creates the id, name , and cost of items.
            Will accept values as props and display onto the UI */
            )))}
        </ul>
    );
};

export default ExpenseList;