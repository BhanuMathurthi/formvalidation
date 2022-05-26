import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Forgot from "./components/forgotpassword";
import Register from "./components/register";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<Forgot />}></Route>
      </Routes>
    </main>
  );
};

export default App;
