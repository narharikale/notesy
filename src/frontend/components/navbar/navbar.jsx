import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../context";

function Navbar() {
  const { themeToggle, theme, setMenu, menu } = useTheme();
  const { isAuthorized, setAuthorized } = useAuth();

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
              {" "}
              <span className="material-icons">search</span>{" "}
            </button>
            <input type="text" />
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
          )}{" "}
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
