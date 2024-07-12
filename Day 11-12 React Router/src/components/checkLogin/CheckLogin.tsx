import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CheckLogin = () => {
    const navigate: any = useNavigate()
    const [login, setLogin] = React.useState(false)
    useEffect(() => {
        const email = localStorage.getItem("email")
        const password = localStorage.getItem("password")

        if(email && password){
            setLogin(true)  
        }
        else{
            setLogin(false)
            navigate('/')
        }
        
    })
  return (
    <div>
        {login ? <Outlet /> : <h1>please login</h1>}
    </div>
  )
}

export default CheckLogin
