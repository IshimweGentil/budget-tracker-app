import React, { useRef} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from "./components/Budget";
import Remaining from "./components/Remaining"
import Total from "./components/Total";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";
import { AppProvider } from "./context/AppContext";
//import ChartComponent from "./components/Chart";

const App = () => {
  return (

    <AppProvider>

    <div className = "container rounded-container ">

      {/* Header*/}
      <h1 className = "mt-3">My Budget Planner</h1> 

      {/* row with chart and budget info*/}
      <div className="row mt-3">
      <div className = "col-md-7">
       {/*<ChartComponent />}
      
        {/* The row containing Budget, Remaining, and Total*/}
        <div className = "row mt-3">
          <div className = "col-sm"><Budget /></div>
          <div className = "col-sm"><Remaining /></div>
          <div className = "col-sm"><Total /></div>


        </div>
        </div>
      
      {/* column 2, with add expense and history
      
      maybe add container for styling*/}

      <div className = "col-md-3 ">

      {/* Expense Form*/}
      <h3 className = "">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>

        {/* History List */}
        <h3 className = "mt-3">History</h3>
        <div className = "row mt-3 ">
          <div className = "col-sm ">
            <ExpenseList />
          </div>
        </div>


      </div>

    </div>
    </div>
    
    </AppProvider>
    
  );
  
};

export default App;