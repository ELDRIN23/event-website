import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./layouts/Layout";
import App from "./App";
import Contact from "./pages/Contact";
import Weddings from "./pages/Weddings";
import FamilyEvents from "./pages/FamilyEvents";
import LoveCelebrations from "./pages/LoveCelebrations";
import WeddingDemo from "./pages/WeddingDemo";
import Baptism from "./pages/baptisum";
import Birthday from "./pages/birthday";
import HolyCommunion from "./pages/holy-communion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/family-events" element={<FamilyEvents />} />

          <Route path="/love-celebrations" element={<LoveCelebrations />} />

          <Route path="/weddings" element={<Weddings />} />
          
          <Route path="/Baptism" element={<Baptism />} />

          <Route path="/Birthday" element={<Birthday />} />

          <Route path="/HolyCommunion" element={<HolyCommunion />} />

          <Route path="/wedding-demo" element={<WeddingDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
