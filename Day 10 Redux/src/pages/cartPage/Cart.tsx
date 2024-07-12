import { Cart } from "../../components"
import store from '../../store/Store';
import { Provider } from "react-redux";
const cart = () => {
  return (
    <div>
      <Provider store={store}>
      <Cart />
    </Provider>
    </div>
  )
}

export default cart
