import "./App.css";
import Dashboard from "./Components/Home/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
