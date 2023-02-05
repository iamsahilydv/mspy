import "./App.css";
import Dashboard from "./Components/Home/Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Login />} />
        <Route path="home" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      {/* <Signup /> */}
    </div>
  );
}

export default App;
