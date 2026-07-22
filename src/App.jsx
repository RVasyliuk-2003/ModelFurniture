import { useState } from "react";
import "./App.css";
import AppMain from "./components/main/AppMain";
import AppHeader from "./components/header/AppHeader";
import AppFooter from "./components/footer/AppFooter";

function App() {
  return (
    <>
      <AppHeader />
      <AppMain />
      {/* <AppFooter /> */}
    </>
  );
}

export default App;
