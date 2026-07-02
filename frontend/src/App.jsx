import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'
import TrendingProducts from './components/TrendingProducts'
import TestPage from './pages/test'
import LoginPage from './pages/loginPage'

function App() {
  

  return (
    <div className='w-full h-screen flex justify-center items-center bg-primary text-secondary'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>

  )
}

export default App
