import React from 'react'
import {Link, Outlet, replace, useNavigate} from 'react-router-dom'
import { useCartContext } from './store/Context'

export default function Layout() {
  const {authValid}=useCartContext()
  const navigate = useNavigate()
  const handleOnLogout=()=>{
    authValid(false)
    navigate('/login', {replace: true})
  }
  return (
    <>
    <Link to="/form">Form</Link>
    <button onClick={handleOnLogout}>Logout</button>
    <Outlet/>
    </>
  )
}
