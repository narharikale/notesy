import { createContext, useContext} from "react";
import { useReducer } from "react";

const FilterContext = createContext();



function FilterProvider( { children } ) { 

    const filterReducer = (state , action) => {
        switch (action.type) {
            case "FILTER_BY_PRIORITY":
                return { ...state , FilterByPriority:action.payload }

            case "SORT_BY_DATE":
                return { ...state , SortByDate:action.payload }
         
            case "CLEAR" :
                return { ...state ,
                    FilterByPriority:null,
                    SortByDate:null
                    }
            
            default:
                return { ...state } ;
        }
    }
    

    const intitialState = {
        FilterByPriority :null,
        SortByDate:null
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