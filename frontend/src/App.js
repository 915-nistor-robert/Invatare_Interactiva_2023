import logo from './logo.svg';
import './App.scss';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobsPage from "./Components/JobsPage/JobsPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="jobs" element={<JobsPage/>}/>
                <Route path="register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
