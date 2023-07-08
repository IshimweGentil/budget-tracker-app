import { createContext, useReducer } from "react";


/* creates new state object based on the action it receives */
const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            }; //copying existing state and overwriting it with the new expense object
              // allows us to add new expenses
        
       case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                (expense) => expense.id !== action.payload),

            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
                 
        default:
            return state;
    }
};

/* Initial state when loading the app */
const initialState = {
    budget: 2000,
    expenses: [
        {id:12, name:"shopping", cost: 40},
        {id:13, name:"holiday", cost: 40},
        {id:14, name:"car service", cost: 50},
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    /* holds state and passes it to the components */
    const [state, dispatch] = useReducer(AppReducer, initialState);
    
    return(
        <AppContext.Provider 
        value = {{
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
    }}>
        {props.children}

    </AppContext.Provider>)
};