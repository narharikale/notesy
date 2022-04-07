import { createContext, useContext , useEffect } from "react";
import { useAuth } from "../auth-context/auth-context";
import axios from 'axios';
import { useReducer } from "react";

const FilterContext = createContext();



function FilterProvider( { children } ) { 

    const filterReducer = (state , action) => {
        switch (action.type) {
            case "FILTER_BY_PRIORITY":
                return { ...state , FilterByPriority:action.payload }
                
            case "CLEAR" :
                return { ...state , FilterByPriority:null }
            default:
                return { ...state } ;
        }
    }
    

    const intitialState = {
        FilterByPriority :'high',
    } 
   

    const [filterState , filterDispatch] = useReducer(filterReducer , intitialState );
   
  
    
    return ( 
        <FilterContext.Provider value={{ filterState , filterDispatch} }>
            { children }
        </FilterContext.Provider>
     );
}

const useFilter = () => useContext(FilterContext);

export { FilterProvider , useFilter }  