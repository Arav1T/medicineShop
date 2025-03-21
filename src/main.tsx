import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import CartProvider from './store/Context.tsx'
import ReduxApp from './ReduxApp.tsx'
import { Provider } from 'react-redux'
import Store from './redux/store/Store.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // <CartProvider>

  //   <App/>
  // </CartProvider>
  <Provider store={Store}>

    <ReduxApp/>
  </Provider>
  
  // </StrictMode>,
)
