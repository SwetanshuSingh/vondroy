import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const HomePage = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path = "/" element = {<SignupPage />} />
          <Route path = "/login" element = {<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default HomePage;