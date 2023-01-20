import "./App.css";
import UserProvider from "./contexts/UserContext";
import Global from "./pages/styles/global";
import RoutesMain from "./routes";
import React from "react";

function App() {
  return (
    <UserProvider>
      <Global />
      <RoutesMain />
    </UserProvider>
  );
}

export default App;
