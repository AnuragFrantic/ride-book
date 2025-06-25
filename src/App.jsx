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
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import DayUse from './Pages/ServiceDetails/DayUse'
// import Uploadservicedetail from './Pages/ServiceDetails/Uploadservicedetail'
import Longrental from './Pages/ServiceDetails/Longrental'
import PremiumPickdrop from './Pages/ServiceDetails/PremiumPickdrop'
import Corporateride from './Pages/ServiceDetails/Corporateride'
import Weddingspecial from './Pages/ServiceDetails/Weddingspecial'
import Partyride from './Pages/ServiceDetails/Partyride'
import Personalgathering from './Pages/ServiceDetails/Personalgathering'
import Seamlessride from './Pages/ServiceDetails/Seamlessride'

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
          {/* <Route path='/service/:url' element={<DayUse/>}/>
          <Route path='/upload-servicedetail' element={<Uploadservicedetail/>}/> */}
          <Route path='/day-use' element={<DayUse />} />
          <Route path='/long-rental' element={<Longrental />} />
          <Route path='/premium-pickup-drop' element={<PremiumPickdrop />} />
          <Route path='/corporate-rides-simplified' element={<Corporateride />} />
          <Route path='/wedding-special-rides' element={<Weddingspecial />} />
          <Route path='/ride-to-the-party-instyle' element={<Partyride />} />
          <Route path='/personal-gathering-made-smoother' element={<Personalgathering />} />
          <Route path='/seamless-rides-for-groups-tours' element={<Seamlessride />} />
        </Route>
      </>
    )
  )

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <RouterProvider router={ThemeRoute} />
    </>
  )
}

export default App
