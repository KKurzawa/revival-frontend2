import './App.css'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from './pages/Landing/Landing'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  const [loading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 7000)
  }, [])

  if (loading) {
    return <Landing />
  }

  return (
    <main className='main-app'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App