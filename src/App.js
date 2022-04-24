import Login from "./Components/Login";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from "./Components/Register";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
