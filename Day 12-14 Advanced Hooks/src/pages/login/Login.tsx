import { Provider } from "react-redux"
import { Container, LoginInput } from "../../components"
import {store} from "../../store/Store"

const Login = () => {
  return (
    <div>
      <Container>
        <Provider store={store}>
        <LoginInput />
        </Provider>
      </Container>
    </div>
  )
}

export default Login
