import "./TextEditor.css";
import "../navbar/navbar.css";

import { useState } from "react";
import { useNotes } from "../../context";
import { QuillEditor } from "../QuillEditor/QuillEditor";
import { TextEditorFooterAction } from "../TextEditorFooterAction/TextEditorFooterAction";





function TextEditor() {
  
  
  const [note, setNote] = useState({
    title: "",
    desc: "",
    color: "",
    priority :"",
    tags:[],
    isInTrash:false
  });

  
  const { createNote } = useNotes();

  return (
    <div className="main-textEditor">
      <div className="text-editor-container d-flex gap-1 flex-column">
        <div> 
          <input
            type="text"
            placeholder="Title"
            className="text-editor-title font-size-md"
            value={note.title}
            onChange={(e) => setNote({ ...note, title: e.target.value })}
          />
        </div>
        
        <QuillEditor note={ note }  setNote={ setNote }/>

        <div className="d-flex justify-between p-relative">
          <TextEditorFooterAction note={note} setNote={ setNote }/>
          <div>
            <button
              className="notesy-btn notesy-primary-btn"
              onClick={() => createNote(note)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { TextEditor };
