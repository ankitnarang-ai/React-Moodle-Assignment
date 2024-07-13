import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

const LoginInput = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className='login-input'>
          <h3>Email</h3>
          <input 
            type="text" 
            placeholder="Enter your email"
            {...register('email', { 
              required: 'Email is required', 
              pattern: { 
                value: /^\S+@\S+$/i, 
                message: 'Invalid email address' 
              } 
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
            <h3>Password</h3>
          <input 
            type="password" 
            placeholder="Enter your password"
            {...register('password', { 
              required: 'Password is required', 
              minLength: { 
                value: 6, 
                message: 'Password must be at least 6 characters' 
              } 
            })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <div className="loginBtn">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginInput;
