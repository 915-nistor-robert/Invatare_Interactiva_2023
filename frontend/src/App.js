import logo from './logo.svg';
import './App.scss';
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotesPage from "./Components/NotesPage/NotesPage";
import AddEditStickyNote from "./Components/AddEditStickyNote/AddEditStickyNote";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="notes" element={<NotesPage/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="sticky-notes" element={<AddEditStickyNote/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
