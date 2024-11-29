import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import ContactForm from './components/ContactUs/ContactForm.jsx'
import Academics from './components/Academics/Academics.jsx'
import About from './pages/About.jsx'
import Login from './components/Users/Login.jsx'
import Signin from './components/Users/Register.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'







const AppLayout=()=>{

return (
  <>
  <Nav/>
  <Outlet/>
<Footer/>
  </>
)



}
const appRouter=createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout/>,
    
    children:[
{ path:"/",
  element:<Home/>

},
{ path:"Contact",
  element:<ContactForm/>

},
{ path:"/Academics",
  element:<Academics/>

},
{ path:"/about",
  element:<About/>

},
{ path:"/login",
  element:<Login/>

},
{ path:"/signup",
  element:<Signin/>

},
    ]
    }
    
  ]
)





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
