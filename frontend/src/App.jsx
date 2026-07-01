import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'
import TrendingProducts from './components/TrendingProducts'

function App() {
  

  return (
    <div className='w-full h-screen flex justify-center items-center bg-primary text-secondary'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin/*" element={<AdminPage />} />
      </Routes>
    </div>

  )
}

export default App
