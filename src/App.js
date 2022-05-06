import React from "react";
import { MenuNav } from "./components/MenuNav";
import Blog from "./pages/Blog";
import Initiative from "./pages/Initiative";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Error from "./pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { ToggleColorMode } from "./components/ToggleColorMode";

import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <MenuNav />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/initiative" element={<Initiative />} />

          <Route path="/Contacts" element={<Contacts />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>

      <ToggleColorMode />
      <Footer />
    </>
  );
}

export default App;
