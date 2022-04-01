import { Sidebar } from '../../components';
import './Notes.css';




function Notes() {
    return ( 
    
        <div className="main-container" >
            <Sidebar/>
            <div className="main-screen" > this is main screen</div>
        </div>
     );
}

export { Notes };