import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notes from "./pages/Notes.jsx";
import Home from "./pages/Home.jsx";
import Update from "./pages/Update.jsx";
import CreateNote from "./pages/CreateNote.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<Notes />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
