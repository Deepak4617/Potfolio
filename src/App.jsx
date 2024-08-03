import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoute from './router/appRoutes'
import About from './pages/about'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <AppRoute/>
      {/* <About/> */}
      </div>
     
    </>
  )
}

export default App
