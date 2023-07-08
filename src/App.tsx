import React, { useEffect } from "react";
import "./App.css";
import { AppRoutes } from "./routes/AppRoutes";
import { useDispatch } from "react-redux";
import { baseAuth } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const autoLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("AUTH") as string);
    if (storedUser) {
      dispatch(baseAuth(storedUser));
    }
  };

  useEffect(() => {
    autoLogin();
  }, []);

  return <AppRoutes />;
}

export default App;