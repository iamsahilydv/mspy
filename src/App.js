import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./Components/Home/Dashboard";
import Login from "./Components/Login/Login";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}

      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Dashboard />} />
      </Routes>

      {/* <Login /> */}
    </div>
  );
}

export default App;
