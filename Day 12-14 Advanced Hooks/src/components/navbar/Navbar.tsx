import { Link } from "react-router-dom";

const Navbar = () => {
  const userData = localStorage.getItem('user');

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTBcKGKH4Rfcr7iZ1-oW8wETo8YfL04aDcQ&s" alt="logo" />
        </Link>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-buttons">
        <Link to="/cart">
          <button className="CartBtn">Cart</button>
        </Link>
        <div className="credentialBtn">
          {!userData ? (
            <>
              <Link to="/login">
                <button>Log in</button>
              </Link>
              <Link to="/signup">
                <button>Sign up</button>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button onClick={() => {localStorage.removeItem('user'); alert('Logged out successfully')}}>Logout</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
