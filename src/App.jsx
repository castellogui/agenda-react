import { Routes, Route } from "react-router-dom";
import Login from "../src/pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login></Login>} />
      </Routes>
    </div>
  );
}

export default App;
