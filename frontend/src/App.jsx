import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/homePage'
import AdminPage from './pages/adminPage'
import TrendingProducts from './components/TrendingProducts'

function App() {
  

  return (
    <div classname='w-full h-screen border-[6px] flex justify-center items-center'>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </div>

  )
}

export default App
