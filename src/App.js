import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Register from "./Components/register/Register";
import Login from "./Components/login/Login";
import Home from "./Components/home/Home";
function App() {
  return (
    <Routes>
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={<Home />}
      />

      {/* <Route
        path="/books"
        element={<Home />}
      /> */}
    </Routes>
  );
}

export default App;
