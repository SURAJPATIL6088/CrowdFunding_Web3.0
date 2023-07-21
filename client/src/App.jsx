import React from "react";
import { Route, Routes } from "react-router-dom";

// pages
import { CampaignDetails, CreateCampaign, Profile, Home } from "./pages";

// components
import {Sidebar, Navbar} from './components';

const App = () => {
  return (
    <div className="relative sm:p-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative"><Sidebar/></div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
};

export default App;
