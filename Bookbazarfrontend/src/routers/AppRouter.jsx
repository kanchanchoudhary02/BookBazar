import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Marketplace from "../pages/Marketplace";
import Books from "../pages/Books";
import Notes from "../pages/Notes";
// import PYQs from "../pages/PYQs";
import Sell from "../pages/Sell";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/books" element={<Books />} />
        <Route path="/notes" element={<Notes />} />
        {/* <Route path="/pyqs" element={<PYQs />} /> */}
        <Route path="/sell" element={<Sell />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;