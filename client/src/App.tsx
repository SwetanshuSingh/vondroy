import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path = "/signup" element = {<SignupPage />} />
          <Route path = "/login" element = {<LoginPage />} />
          <Route path="/chat" element = {<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;