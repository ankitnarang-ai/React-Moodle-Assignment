import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignupInput = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const signup = (data: any) => {
    localStorage.setItem('user', JSON.stringify(data));
  };

  return (
    <div className='signup-container'>
      <form className='form' onSubmit={handleSubmit(signup)}>
        <div className='input'>
        <h3>Name</h3>
        <input 
          type="text" 
          placeholder="Enter your name"
          {...register('name', { required: true })}
        />
        {errors.name && <span>Name is required</span>}
        <h3>Email</h3>
        <input 
          type="text" 
          placeholder="Enter your email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Email is required and should be valid</span>}
        <h3>Password</h3>
        <input 
          type="password" 
          placeholder="Enter your password"
          {...register('password', { required: true, minLength: 6 })}
        />
        {errors.password && <span>Password is required and should be at least 6 characters long</span>}
        </div>
        <div className="signupBtn">
          <Link to="/">
          <button type="submit">Signup</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignupInput;
