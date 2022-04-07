import { NoteCard, Sidebar } from "../../components";
import { useFilter, useNotes } from "../../context";
import '../notes/Notes.css'
import './FilterScreen.css'



function Filter() {

    function filterByPriority(state , data) {
        if(state.FilterByPriority &&  state.FilterByPriority === 'high'){
            return data.filter( (note) => note.priority ==="High"  )
        }
        if(state.FilterByPriority &&  state.FilterByPriority === 'medium'){
            return data.filter( (note) => note.priority ==="Medium"  )
        }
        if(state.FilterByPriority &&  state.FilterByPriority === 'low'){
            return data.filter( (note) => note.priority ==="Low"  )
        }
        return data ;
    
    }    

    const { notesData } = useNotes();
    const { filterState }  = useFilter()
    const filteredData =  filterByPriority(filterState , notesData )

    return ( 
        <div className="main-container">
            <Sidebar/>
            <div className="main-screen">
                <div className="note-card-container">
                    { filteredData && filteredData.map( (note, index) => {
                        return (
                            <NoteCard note={note} key={index} />
                        )
                    } )}
                </div>
            </div>
           
           
        </div>
     );
}

export { Filter };