import './App.css'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageViewTrains from './components/PageViewTrains'
import Login from './components/Login'
import MainPage from './components/MainPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<PageViewTrains />} />
              <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <ToastContainer /> */}
    </>
  )
}

export default App
