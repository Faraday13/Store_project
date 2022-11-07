import React from "react";
import { Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Products from "./pages/Products";
import TittlePage from "./pages/TittlePage";
import "./style/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TittlePage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
