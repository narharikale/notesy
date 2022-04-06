
import { Link } from 'react-router-dom';
import './home.css'

function Home() {
    return ( 
        <div className='m-16'>
        
            <Link className="notsy-btn notesy-primary-btn" to='/notes'> Go to Notes </Link>
            <h4> Homepage in construction   </h4>

        </div>
     );
}

export  { Home };