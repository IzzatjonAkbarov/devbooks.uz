import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./index.css";
const UserLayout = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <NavLink
          aria-current={"page"}
          to={"/user-page"}
          className="p-3 rounded-t w-[297px] border-x border-x-gray-300 bg-[#f3f6f9] flex items-center gap-2">
          <div className="px-3 py-1 bg-[#e5eaee] rounded font-bold text-[#3699ff]">
            <p>1</p>
          </div>
          <p className="text-[#464e5f] font-bold text-[14px]">My account</p>
        </NavLink>
        <NavLink
          aria-current={"page"}
          to={"/user-page/security-page"}
          className="p-3 rounded-t w-[297px] border-x border-x-gray-300 bg-[#f3f6f9] flex items-center gap-2">
          <div className="px-3 py-1 bg-[#e5eaee] rounded font-bold text-[#3699ff]">
            <p>2</p>
          </div>
          <p className="text-[#464e5f] font-bold text-[14px]">Security</p>
        </NavLink>
        <NavLink
          aria-current={"page"}
          to={"/user-page/settings-page"}
          className="p-3 rounded-t w-[297px] border-x border-x-gray-300 bg-[#f3f6f9] flex items-center gap-2">
          <div className="px-3 py-1 bg-[#e5eaee] rounded font-bold text-[#3699ff]">
            <p>3</p>
          </div>
          <p className="text-[#464e5f] font-bold text-[14px]">Settings</p>
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default UserLayout;
