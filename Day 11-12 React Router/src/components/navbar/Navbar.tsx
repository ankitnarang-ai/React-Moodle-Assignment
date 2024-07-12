import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

function Navbar() {
  const count = useSelector((state: any) => state.cart.count);
  const navigate = useNavigate()
  const cart = () => {
    navigate('/cart');
  }

  return (
    <div className="navbar-container">
      <div className="logo"> <img src="https://logowik.com/content/uploads/images/dribbble-new-20235066.logowik.com.webp" /></div>
      <div className="navbar-items">
        <ul>
          <li>Insipiration</li>
          <li>Find work</li>
          <li>Learn Design</li>
          <li>Go pro</li>
          <li>Design files</li>
          <li>Hire Designers</li>
        </ul>
      </div>
      <div className="right-buttons-navbar">
        <button onClick={cart} className="cart-button">Cart: {count}</button>
        <button onClick={() => {
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          navigate('/')
        }} className="logout">Logout</button>
      </div>
    </div>
  )
}

export default Navbar

