import { Sidebar, TextEditor } from '../../components';
import './Notes.css';




function Notes() {
    return ( 
    
        <div className="main-container" >
            <Sidebar/>
            <div className="main-screen"> 
            
                <TextEditor/>
            
             </div>
        </div>
     );
}

export { Notes };