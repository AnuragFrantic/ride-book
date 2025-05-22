import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import WebLayout from './Layout/WebLayout'
import Home from './Pages/Home'

import Career from './Pages/Career'
import Policy from './Pages/Policies/Policy'
import Termscondition from './Pages/Policies/Termscondition'
import Contactus from './Pages/Contactus'

import Registerasvendor from './Pages/RegistrationForm/Registerasvendor'
import Driverdetail from './Pages/Home/Driverdetail'
import AboutUs from './Pages/AboutUs'

function App() {
  const ThemeRoute = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path='/' element={<WebLayout />}>
          <Route index element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/career' element={<Career />} />
          <Route path='/privacy-policy' element={<Policy />} />
          <Route path='/terms-condition' element={<Termscondition />} />
          <Route path='/contact' element={<Contactus />} />
          <Route path='/vendor-page' element={<Registerasvendor />} />
          <Route path='/driver-detail' element={<Driverdetail />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
