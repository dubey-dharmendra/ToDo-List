
import Login from './Pages/Login'
import ErrorPage from './Pages/ErrorPage'

import { ToastContainer } from 'react-toastify'

import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'
import ToDo from './Pages/ToDo'
import ProtectedLayout from './layouts/ProtectedLayout'
import { AuthProvider } from './context/AuthContext'
import About from './Pages/About'



const App = () => {


  return (

    <AuthProvider>

      <Router>
        <Routes>
          {/* Public Route */}
          <Route path='/' element={<><Login /> </>} />

          {/* Protected Route */}
          <Route element={<ProtectedLayout />} >

            <Route path='/home' element={<ToDo />} />
            <Route path='/about' element={<About />} />

          </Route >

          <Route path="*" element={<ErrorPage />} />

        </Routes>
        <ToastContainer />
      </Router>
    </AuthProvider>

  )
}

export default App