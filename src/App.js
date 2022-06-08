import { Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Forgot from "./components/forgotpassword";
import Register from "./components/register";
import OTPBox from "./components/otpValidation";
import NoMatchFound from "./components/NoMatchFound";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<Forgot />}></Route>
        <Route path="/otpbox" element={<OTPBox />}></Route>
        <Route path="*" element={<NoMatchFound />}></Route>
      </Routes>
    </main>
  );
};

export default App;
