import React from "react";
import Header from "../../../Components/Header";
import { Outlet } from "react-router-dom";
import SwiperCustom from "../../../Components/swiper";

const MainLayout = () => {
  return (
    <div className="bg-[#191919]">
      <header>
        <Header />
        <SwiperCustom />
        <Outlet />
      </header>
    </div>
  );
};

export default MainLayout;
