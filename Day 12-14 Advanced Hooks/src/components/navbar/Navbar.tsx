import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { addItems } from "../../reducer/itemSlice";
const Navbar = () => {
  const userData = localStorage.getItem('user');
  const [searchQuery, setSearchQuery] = useState('')
  const selector: any =  useSelector((state: any) => state.item.items);
  const dispatch = useDispatch();
  const handleSearchChange =(e: any)=>{
    setSearchQuery(e.target.value);
    const selectedItem = selector.filter((item: any) =>
      item.title.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    if(e.target.value === ''){
      dispatch(addItems(selector))
    }
    dispatch(addItems(selectedItem))
    console.log("Filtered items", selectedItem);
  }
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbTBcKGKH4Rfcr7iZ1-oW8wETo8YfL04aDcQ&s" alt="logo" />
        </Link>
      </div>
      <div className="navbar-search">
        <input 
        type="text" 
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange} />
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
