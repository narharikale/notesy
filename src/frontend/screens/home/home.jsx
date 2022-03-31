
import { Sidebar } from "../../components/sidebar/sidebar";
import './home.css'

function Home() {
    return ( 
        <div className="main-container" >
            <Sidebar/>
            <div className="main-screen" > this is main screen</div>
        </div>
     );
}

export  { Home };