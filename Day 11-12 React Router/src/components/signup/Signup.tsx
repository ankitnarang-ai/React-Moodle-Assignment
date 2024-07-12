import { SubmitHandler, useForm } from "react-hook-form";
import Container from "../container/Container";
import { useNavigate} from "react-router-dom";

type Inputs = {
  firstname: string,
  lastname: string,
  email: string,
  password: string
};
function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) =>{
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    navigate('/')
  }

  return (
    <Container>
      <div className="facebook-logo">
          <h1>Facebook</h1>
      </div>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" defaultValue="" placeholder="First Name" {...register("firstname",
          {
            required: "firstname is required",
            minLength: {
              value: 2,
              message: "min length is 2"
            }
          }
             )} />
              {errors.firstname && <p>{errors.firstname.message}</p>}
          <input type="text" defaultValue="" placeholder="Last Name" {...register("lastname",
            {
              minLength: {
                value: 2,
                message: "min length is 2"
              }
            }
          )} />
           {errors.lastname && <p>{errors.lastname.message}</p>}
          <input type="text" defaultValue="" placeholder="Enter your email" {...register("email",{
            required: "email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address"
            } 
          })} />
          {errors.email && <p>{errors.email.message}</p>}
          <input type="password" placeholder="password" {...register("password",
            { 
              required: "password is required",
              minLength: {
                value: 8,
                message: "min length is 6"
              },
              maxLength: {
                value: 16,
                message: "max length is 16"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character"
              }

              }
          )} />
           {errors.password && <p>{errors.password.message}</p>}
          <button onClick={handleSubmit(onSubmit)} className="loginBtn">SignUp</button>
        
        </form>
      </div>
    </Container>
  );
}

export default Signup
