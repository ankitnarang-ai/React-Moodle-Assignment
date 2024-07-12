import { Cart, Navbar } from "../../components"
import store from '../../store/Store';
import { Provider } from "react-redux";
const cart = () => {
  return (
    <div>
      <Provider store={store}>
      <Navbar />
        <br />
        <center><h1>CART</h1></center>
      <Cart />
    </Provider>
    </div>
  )
}

export default cart
