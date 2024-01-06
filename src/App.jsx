import Layout from './Components/Layout'
import Login from './Pages/login'
import SignIn from './Pages/SignIn'
import {createBrowserRouter,RouterProvider, } from 'react-router-dom'
import ForgetPassword1 from './Pages/ForgetPassword1'
import ForgetPassword2 from './Pages/ForgetPassword2'
import AjouterPatient from './Pages/AjouterPatient'

import Dashboard from './Pages/Dashboard'
import Error from './Images/404Error.svg'
import ProfileDoc from './Pages/Profile'
import Patients from './Pages/Patients'

const router = createBrowserRouter(
[
  {
    path: "/",
    element: <Layout/>,
  },
  {
    path: "/ForgetPassword",
    element: <ForgetPassword1/>,
  },
  {
    path: "/CreateNewPassword",
    element: <ForgetPassword2/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },
  {
    path: "/SignIn",
    element: <SignIn/>,
  },
  {
    path: "/Home",
    element: <Dashboard/>,
  },
  {
    path: "/Profile",
    element: <ProfileDoc/>,
  },
  {
    path: "/Patients",
    element: <Patients/>,
  },
  {
    path: "/AjouterPatient",
    element: <AjouterPatient/>,
  },
  {
    path: "*",
    element: <img className='justify-center items-center h-full mx-[27%]' src={Error} alt="error 404" />,
  },
]
);
function App() {
  

  return (
    
    <main>
    <RouterProvider router={router} />
    </main>
    
  )
}

export default App