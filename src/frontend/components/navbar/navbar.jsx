
import { useTheme , } from '../../context';
import './navbar.css';

function Navbar() {

    const { themeToggle , theme, setMenu ,menu} = useTheme();
    
    return ( 
    
        <nav className="header header-container">
            <div className='d-flex gap-1'>
                <div className='icon-btn-container'>
                <button className="icon-btn" onClick={ () => setMenu(!menu) } ><span className="material-icons">menu</span> </button>
                    
                </div>
                <div className='d-flex align-center gap-1'>
                    <img  className='header-logo' src="/assets/notesylogo.png" alt="logo" />
                    <h2 className='m-0'>Notesy</h2>
                </div>
                
            </div>
            <div className='d-flex searchbar-container'>
                <div className='searchbar'>
                    <button className="d-flex"> <span className='material-icons'>search</span> </button>
                    <input type="text" />
                </div>
                
                
            </div>
            <div className='d-flex gap-1' >
                <button className='icon-btn'  onClick={ themeToggle }> { theme === 'dark' ? <span title='Light Mode' className='material-icons toggle-mode'>light_mode</span> :  <span title='Dark Mode' className='material-icons toggle-mode1'>dark_mode</span> } </button>
                <button className='notesy-btn notesy-primary-btn'>Sign in</button>
                <button className='notesy-btn notesy-secondary-btn' >Sign up</button>
            </div>
            
            
        </nav>
     );
}

export  { Navbar };