import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

import { Home, CreatePost } from "./pages";
import { logo } from "./assets";

const App = () => {
  return (
    <BrowserRouter>
      <header className="flex justify-between items-center p-4 bg-white border-b border-b-[#e6ebf4] sm:px-8">
        <Link to="/">
          <img src={logo} alt="DALL-E" className="w-28 object-contain" />
        </Link>
        <Link
          to="/create-post"
          className="px-4 py-2 font-inter font-medium bg-[#6469ff] text-white rounded-md"
        >
          Create
        </Link>
      </header>

      <main className="w-full min-h-[calc(100vh-73px)] px-4 py-8 bg-[#f9fafe] sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
