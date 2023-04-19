import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Message from './Pages/Message'
import Send from './Pages/Send'
import Chanel from './Pages/Chanel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="/message" element={<Message/>}></Route>
        <Route path='/chanel' element={<Chanel/>} />
        <Route path='/send' element={<Send/>} />
      </Route>
    </Routes>
  )
}

export default App
