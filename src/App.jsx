import Navbar from "./components/Navbar";
import { Routes, Route } from 'react-router-dom'
import Login from '../src/pages/Login'
import Home from '../src/pages/Home'
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='*' element={<NotFound></NotFound>} />
        <Route path='/' element={<Login></Login>} />
        <Route path='/home' element={<Home></Home>} />
      </Routes>
    </div>    
  )
}

export default App
