import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = (): React.JSX.Element => {

  const { auth } = useContext(AuthContext);

  return (
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={ auth ? <Navigate to="/chat" /> : <SignupPage /> } />
          <Route path="/login" element={ auth ? <Navigate to="/chat" /> : <LoginPage /> } />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
