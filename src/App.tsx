
import { createElement, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductForm from './components/ProductForm'
import AuthForm from './components/Auth'
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider } from 'react-router-dom'
import { useCartContext } from './store/Context'
import Layout from './Layout'

function App() {
  const {authcheker}=useCartContext()
  const [auth, setAuth] = useState(authcheker); 
  // const [count, setCount] = useState(0)
  useEffect(() => {
    setAuth(authcheker);
}, [authcheker]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
       {/* {!authcheker &&  <Route path='/' element={<AuthForm />} />}
        {authcheker && <Route path='/' element={<Layout />} >
        <Route path='form' element={<ProductForm/>}/>
        </Route>} */}
        <Route path="/login" element={<AuthForm />} />
        <Route
          path="/"
          element={auth ? <Layout /> : <Navigate to="/login" />}
        >
          <Route path='form' element={<ProductForm/>}/>
        </Route>
        
      </>
    )
  );

  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
