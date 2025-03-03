import React, { useState, useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import SwiperCustom from "../../../Components/swiper";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChange = (value) => {
    navigate(value);
  };

  return (
    <div>
      <SwiperCustom />

      <div className="container1 flex items-center justify-center  max-[900px]:justify-between max-[425px]:flex-col ">
        <h1 className="text-4xl font-['Great_Vibes'] text-center text-[#c9ac8c]">
          Asosiy kategoriyalar
        </h1>

        {isMobile && (
          <div className="flex justify-center py-5 max-[425px]:w-full mx-10">
            <select
              onChange={(e) => handleSelectChange(e.target.value)}
              className="p-2  gap-2 bg-[#c9ac8c] rounded-lg  hover:bg-[#c9ac8ca2] max-[425px]:w-full">
              <option value="/kitoblar">Kitoblar</option>
              <option value="/temuriylardavri">Temuriylar davri</option>
              <option selected value="/">
                Jadid adabiyoti
              </option>
              <option value="/sovetdavri">Sovet davri</option>
              <option value="/mustaqillikdavri">Mustaqillik davri</option>
            </select>
          </div>
        )}
      </div>
      {!isMobile && (
        <div
          className={`hidden md:flex items-center gap-20 justify-center py-5`}>
          <NavLink
            to="/kitoblar"
            className="text-[20px] text-[#A3A3A3] font-normal">
            Kitoblar
          </NavLink>
          <NavLink
            to="/temuriylardavri"
            className="text-[20px] text-[#A3A3A3] font-normal">
            Temuriylar davri
          </NavLink>
          <NavLink to="/" className="text-[20px] text-[#A3A3A3] font-normal">
            Jadid adabiyoti
          </NavLink>
          <NavLink
            to="/sovetdavri"
            className="text-[20px] text-[#A3A3A3] font-normal">
            Sovet davri
          </NavLink>
          <NavLink
            to="/mustaqillikdavri"
            className="text-[20px] text-[#A3A3A3] font-normal">
            Mustaqillik davri
          </NavLink>
        </div>
      )}

      <Outlet />
    </div>
  );
};

export default HomePage;
