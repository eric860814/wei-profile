import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Contents from "./components/Contents";
// import ArticlePage from "./components/Article/ArticlePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Contents></Contents>}></Route>
        {/* <Route path='Article' element={<ArticlePage></ArticlePage>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
