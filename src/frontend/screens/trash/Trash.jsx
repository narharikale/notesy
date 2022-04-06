import { NoteCard, Sidebar } from '../../components';
import { useNotes } from '../../context';
import '../notes/Notes.css';




function Trash() {
    const { notesData } = useNotes()
    

    return ( 
    
        <div className="main-container" >
            <Sidebar/>
            <div className="main-screen"> 
              
                <div className='note-card-container'>
                    { notesData &&  notesData.map((note) => {
                        return (
                            note.isInTrash && <NoteCard key={note._id} note={note}/>  
                            
                        )
                    })}
                </div>
             </div>
        </div>
     );
}

export { Trash };