import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard';
import StudentDetails from './pages/student-details';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="details" element={<StudentDetails />} />
      </Routes>
   
    </div>
  );
}

export default App;
