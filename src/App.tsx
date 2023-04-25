import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import TodoPage from "./pages/TodoPage";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    setIsAuth(!!token);
  }, [token]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
