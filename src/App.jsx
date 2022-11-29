import { Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Home from '../src/pages/Home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login></Login>} />
        <Route path='/home' element={<Home></Home>} />
      </Routes>
    </div>    
  )
}

export default App
