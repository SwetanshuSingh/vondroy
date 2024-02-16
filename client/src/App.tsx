import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path = "/signup" element = {<SignupPage />} />
          <Route path = "/login" element = {<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;