import React from "react";
import Header from "../../../Components/Header";
import { Outlet } from "react-router-dom";
import bgimg from "../../assets/icons/bgimg.svg";
const MainLayout = () => {
  return (
    <div className="bg-[#191919]  realtive">
      <img className="absolute z-10 bottom-0 right-0" src={bgimg} alt="" />
      <header className="relative z-20">
        <Header />
        <Outlet />
      </header>
    </div>
  );
};

export default MainLayout;
