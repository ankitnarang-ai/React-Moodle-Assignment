import { useForm, SubmitHandler } from "react-hook-form";
import Container from "../container/Container";
import { useNavigate } from "react-router-dom";
type Inputs = {
  email: string,
  password: string,
};

function Login() {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>{
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if(!(data.email === email) && !(data.password === password)){
      alert('password or email is incorrect')
    }
    else navigate('/home')
  }

  return (
    <Container>
      <div className="facebook-logo">
          <h1>Facebook</h1>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

          <input type="text" defaultValue="" placeholder="Enter your email" {...register("email")} />
          <input type="password" placeholder="password" {...register("password")} />
          <button className="loginBtn">Login</button>
          <button className="forgotPasswordBtn">Forgot password?</button>
          <hr className="line" />
          <button onClick={() => navigate('/signup')} className="createAccountBtn" > Create New Account </button>
      
        </form>
      </div>
    </Container>
  );
}

export default Login
