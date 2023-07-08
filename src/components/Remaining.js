import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";


const Remaining = () => {
    const {expenses, budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
                    // if the expenses exceed the budget, turn red
    const leftOver = budget - totalExpenses;
                // calculates the cost of whats left
    return (
        <div className = {`alert ${alertType}`}>
            <span>Remaining: ${leftOver}</span>
        </div>
    );
};

export default Remaining