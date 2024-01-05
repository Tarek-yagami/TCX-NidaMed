import Layout from './Components/Layout'
import Login from './Pages/login'
import SignIn from './Pages/SignIn'
import {Route , Routes} from 'react-router-dom'
import Recherche from './Components/barre_recherche'
import Sidebar from './Components/sidebar'
import SampleTable from './Components/Table'
import Patients from './Pages/Patients'
import ForgetPassword1 from './Pages/ForgetPassword1'
import ForgetPassword2 from './Pages/ForgetPassword2'

function App() {
  

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/Login' element={<Login />} />
      </Routes> */}
   
    <div className=' flex flex-row gap-2 items-center'>
      <Sidebar/>
      <Patients/>
    </div>
    
    </>
  )
}

export default App