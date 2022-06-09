import { Routes, Route } from "react-router-dom";
import Forgot from "./components/forgotpassword";
import Register from "./components/register";
import Login from "./components/loginpage";
import NoMatchFound from "./components/NoMatchFound";
import OtpValidation from "./components/otpValidation";
import WelcomePage from "./components/welcomePage";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<Forgot />}></Route>
        <Route path="/otpvalidation" element={<OtpValidation />}></Route>
        <Route path="/welcomepage" element={<WelcomePage />}></Route>
        <Route path="*" element={<NoMatchFound />}></Route>
      </Routes>
    </main>
  );
};

export default App;
