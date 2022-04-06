import "./noteCard.css";

import axios from "axios";
import { TextEditorFooterAction } from "../TextEditorFooterAction/TextEditorFooterAction";
import { useArchive, useAuth, useNotes } from "../../context";
import { useLocation } from "react-router-dom";

function NoteCard({ note }) {
  const { isAuthorized } = useAuth();
  const { setNotesData } = useNotes();
  const { postArchive, restoreArchive } = useArchive();
  const { _id, title, desc, color, priority, tags } = note;

  const { pathname } = useLocation();




    const foreverDelete = async(id) =>  {
     
        try {
            const { data } = await axios.delete( `/api/notes/${id}` , {
                headers:{
                    authorization : isAuthorized.authtoken
                }
            } )
            setNotesData(data.notes)    
            
        } catch (error) {
            console.error(error)
        }
    }
    
  const updateNote = async (note) => {
        try {
            const { data } = await axios.post(`/api/notes/${note._id}`,{ note }, {
                headers: {
                    authorization: isAuthorized.authtoken,
                },
                }
            );
            setNotesData(data.notes);
        } catch (error) {
            console.error(error);
        }
    };


return (
    <div className={`note-card ${color} `}>
      {priority && <div class="badge-text">{priority}</div>}
      <div className="note-card-header">
        <div className="note-title"> {title} </div>
        {/* <button className="icon-btn material-icons-outlined"> push_pin </button> */}
      </div>

      <div
        className="note-card-desc p-1"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      <div>
        {tags.map((tag, index) => (
          <div key={index} className="badge-text">
           
            {tag}
          </div>
        ))}
      </div>
      <div className="note-card-footer">
        <div className="btn-container p-relative">

          { pathname === '/archive' || pathname === '/trash' ? null : <TextEditorFooterAction note={note} setNote={(note) => updateNote(note)}/> }

          { pathname === "/archive" ? (
            <button
              className="icon-btn material-icons-outlined"
              onClick={() => restoreArchive(_id, note)}
            >
            unarchive
            </button>
          ) : ( pathname !== '/trash' ? ( <button  className="icon-btn material-icons-outlined" onClick={() => postArchive(_id, note)}>
                archive
                </button>)
           : null
          )}
       
            { note.isInTrash ? <button  className="icon-btn material-icons-outlined" onClick={() => updateNote( { ...note , isInTrash:false })}>
                restore_from_trash
                </button> : <button className="icon-btn material-icons-outlined" onClick= { () => updateNote( { ...note , isInTrash:true }) }> delete </button>
            }

            { pathname === '/trash' &&  <button  className="icon-btn material-icons-outlined" onClick={() => foreverDelete(_id, note)}>
                delete_forever
                </button> 
            }
        </div>
      </div>
    </div>
  );
}

export { NoteCard };
