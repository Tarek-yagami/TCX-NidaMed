import Layout from './Components/Layout'
import Login from './Pages/login'
import SignIn from './Pages/SignIn'
import {Route , Routes} from 'react-router-dom'

function App() {
  

  return (
    <>
    {/* <Routes>
      <Route path='/' element={<Layout />}/>
      <Route path='/SignIn' element={<SignIn/>}/>
      <Route path='/Login' element={<Login />} />
      </Routes> */}
   
    <div>
      <Layout />
    </div>
    
    </>
  )
}

export default App
