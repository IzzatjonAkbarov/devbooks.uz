import { Tabs } from "antd";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import userimg from "../../shared/assets/images/userimg.png";
const Header = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  return (
    <div className="border-b border-b-[#303030]">
      <div className="flex items-center justify-between container1 ">
        <Link to={"/"} className="text-[25px] font-normal text-[#c9ac8c]  ">
          Badiiyat
        </Link>

        <div className="flex items-center gap-20">
          <div className="text-white flex items-center gap-10">
            <NavLink className="">
              <div className="py-6 hover:text-amber-200 transition-all">
                Bosh sahifa
              </div>
            </NavLink>
            <NavLink className="">
              <div className="py-6 hover:text-amber-200 transition-all">
                Nasr
              </div>
            </NavLink>
            <NavLink className="">
              <div className="py-6 hover:text-amber-200 transition-all">
                Nazm
              </div>
            </NavLink>
            <NavLink className="">
              <div className="py-6 hover:text-amber-200 transition-all">
                Maqolalar
              </div>
            </NavLink>{" "}
            <NavLink className="">
              <div className="py-6 hover:text-amber-200 transition-all">
                Forum
              </div>
            </NavLink>
          </div>

          <div className=" rounded-full w-fit overflow-hidden">
            <img src={userimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
