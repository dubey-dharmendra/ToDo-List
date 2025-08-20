
import Login from './Pages/Login'
import ErrorPage from './Pages/ErrorPage'

import { ToastContainer } from 'react-toastify'

import { BrowserRouter as Router, Routes, Route, RouterProvider } from 'react-router-dom'
import ToDo from './Pages/ToDo'



const App = () => {


  return (

    <Router>
      <Routes>
        <Route path='/' element={<><Login /> <ToastContainer /></>} />
        <Route path='/home' element={<ToDo />} />

      </Routes>
    </Router>

  )
}

export default App