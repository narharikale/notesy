import { NoteCard, Sidebar } from "../../components";
import { useArchive } from "../../context";
import '../notes/Notes.css'
import './Archive.css'



function Archive() {

    const { archiveData } = useArchive();


    return ( 
        <div className="main-container">
            <Sidebar/>
            <div className="main-screen">
                <div className="note-card-container">
                    { archiveData && archiveData.map( (note, index) => {
                        return (
                            <NoteCard note={note} key={index} />
                        )
                    } )}
                </div>
            </div>
           
           
        </div>
     );
}

export { Archive };