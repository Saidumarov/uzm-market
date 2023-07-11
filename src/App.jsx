import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Layout from "./components/nav/Layout";
import Chilpage from "./components/chila-bozor/Chilpage";
import Stiky from "./components/Biz-Haqimizda/Stiky";

function App() {
  return (
    <div className="app">
         <Stiky/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Layout />} />
            <Route path="/post/roduct/single/:id" element={<Chilpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
