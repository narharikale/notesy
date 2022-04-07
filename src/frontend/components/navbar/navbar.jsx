import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth, useFilter, useTheme } from "../../context";
import { useState } from "react";

function Navbar() {
  const { themeToggle, theme, setMenu, menu } = useTheme();
  const { isAuthorized, setAuthorized } = useAuth();
  const [ showFilter , setShowFilter ] = useState(false);

  const { filterState ,  filterDispatch } = useFilter();
  const { FilterByPriority } = filterState

  function signOutHandler() {
    localStorage.removeItem("AuthToken");
    setAuthorized({ authtoken: "", status: false });
  }

  
  return (
    <nav className="header header-container">
      <div className="d-flex gap-1">
        <div className="icon-btn-container">
          {isAuthorized.status ? (
            <button className="icon-btn" onClick={() => setMenu(!menu)}>
              <span className="material-icons">{ menu ? 'clear' : 'menu' }</span>{" "}
            </button>
          ) : null}
        </div>
        <div className="d-flex align-center gap-1">
          <img
            className="header-logo"
            src="/assets/notesylogo.png"
            alt="logo"
          />
          <h2 className="m-0">Notesy</h2>
        </div>
      </div>

      {isAuthorized.status && (
        <div className="d-flex searchbar-container">
          <div className="searchbar">
            <button className="d-flex">
              <span className="material-icons">search</span>{" "}
            </button>
            <input type="text" />
            <button className="d-flex p-relative">
              <Link to='/filter' role='button' className="material-icons" onClick={ () => setShowFilter(!showFilter) } >tune</Link>
              { showFilter &&
                 <div className="filter-container">
                    <div>
                        <h5>Filter By Priority</h5>
                            <label htmlFor='priority-high' className="priority-label">
                                <input
                                  type="radio"
                                  id='priority-high'
                                  name="priority"
                                  value='high'
                                  checked = { FilterByPriority === "high" } 
                                  onChange={ ()=> filterDispatch( { type:"FILTER_BY_PRIORITY" , payload:"high"} ) }
                                />
                                High
                            </label>
                            <label htmlFor='priority-medium' className="priority-label">
                                <input
                                  type="radio"
                                  id='priority-medium'
                                  name="priority"
                                  value='medium'
                                  checked = { FilterByPriority === "medium" } 
                                  onChange={ ()=> filterDispatch( { type:"FILTER_BY_PRIORITY" , payload:"medium"} ) }
                                />
                                Medium
                            </label>
                            <label htmlFor='priority-low' className="priority-label">
                                <input
                                  type="radio"
                                  id='priority-low'
                                  name="priority"
                                  value='low'
                                  checked = { FilterByPriority === "low" } 
                                  onChange={ ()=> filterDispatch( { type:"FILTER_BY_PRIORITY" , payload:"low"} ) }
                                />
                                Low
                            </label>
                    </div>
                    
                    <div className="notsy-btn" 
                      onClick={ ()=> filterDispatch( { type:"CLEAR" } )}
                    > clear</div>
                    <div className="notsy-btn material-icons" 
                      onClick={ () => setShowFilter(!showFilter) }
                    > clear</div>
                </div> 
              }
            </button>
          </div>
        </div>
      )}

      <div className="d-flex gap-1">
        <button className="icon-btn" onClick={themeToggle}>
          {" "}
          {theme === "dark" ? (
            <span title="Light Mode" className="material-icons toggle-mode">
              light_mode
            </span>
          ) : (
            <span title="Dark Mode" className="material-icons toggle-mode1">
              dark_mode
            </span>
          )}
        </button>
        {isAuthorized.status ? (
          <button
            onClick={() => signOutHandler()}
            className="notesy-btn notesy-secondary-btn"
          >
            Sign out
          </button>
        ) : (
          <>
            <Link to="/signin">
              <button className="notesy-btn notesy-primary-btn">Sign in</button>
            </Link>
            <Link to="/signup">
              <button className="notesy-btn notesy-secondary-btn">
                Sign up
              </button>
            </Link>{" "}
          </>
        )}
      </div>
    </nav>
  );
}

export { Navbar };
