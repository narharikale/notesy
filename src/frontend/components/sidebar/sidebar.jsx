import { useTheme } from '../../context';
import './sidebar.css'


const sidebarList= [ 
    {title:'Notes' , iconName:'sticky_note_2'},
    {title:'Archives' , iconName:'archive'},
    {title:'Labels' , iconName:'label'},
    {title:'Trash' , iconName:'delete'}
] 



function Sidebar() {

  const { menu } = useTheme();
 
    return ( 

        <>
        <div className="sidebar-container sidebarDisplay">
                { sidebarList.map( (item,index) => {
                    return (
                        <a key={index} className='sidebar-link'>    
                            <span className="material-icons-outlined" >{item.iconName}</span>
                            <h4> {item.title} </h4>
                        </a>
                    )
                })}
        </div>

        { menu ?  
           ( <div className="sidebar-container">
                { sidebarList.map( (item,index) => {
                    return (
                        <a key={index} className='sidebar-link'>    
                            <span className="material-icons-outlined" >{item.iconName}</span>
                            <h4> {item.title} </h4>
                        </a>
                    )
                })}
            </div>) : null
        }
        </>
        
     
     );
}

export { Sidebar } ;