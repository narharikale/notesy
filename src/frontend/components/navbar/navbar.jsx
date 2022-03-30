
import { useTheme } from '../../context';
import './navbar.css'

function Navbar() {

    const { themeToggle , theme } = useTheme()
    
    return ( 
    
        <nav className="header header-container">
            <div className='d-flex'>
                <div>
                <button className="icon-btn"><span className="material-icons">menu</span> </button>
                    
                </div>
                <div className='d-flex align-center'>
                    <img  className='header-logo' src="/assets/notesylogo.png" alt="logo" />
                    <h3 className='m-0'>Notesy</h3>
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