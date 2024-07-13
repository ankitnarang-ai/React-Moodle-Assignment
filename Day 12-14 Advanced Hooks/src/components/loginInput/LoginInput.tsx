const LoginInput = () => {
  return (
    <div>
      <input type="text" placeholder="Enter your email"/>
      <input type="password" placeholder="Enter your password" /> 
      <div className="loginBtn">
        <button>Login</button>
      </div>
    </div>
  )
}

export default LoginInput
