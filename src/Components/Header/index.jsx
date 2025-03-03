import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import defUser from "../../shared/assets/images/defUser.png";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
const Header = () => {
  let User = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const handleAuthorization = () => {
    if (localStorage.getItem("token") || localStorage.getItem("user")) {
      navigate("/user-page");
    } else {
      navigate("/authorization");
    }
  };
  return (
    <div className="border-b border-b-[#303030]">
      <div className="flex items-center justify-between container1 ">
        <div className="flex items-center gap-3">
          <div className="hidden max-[768px]:block">
            <Button
              className="!bg-transparent"
              icon={<MenuOutlined className="!text-gray-300" />}
              onClick={showDrawer}></Button>
            <Drawer
              placement="left"
              title="Basic Drawer"
              onClose={onClose}
              open={open}>
              <div className="text-white flex items-start  flex-col  gap- ">
                <NavLink className="">
                  <div className="py-3 hover:text-amber-200 transition-all ">
                    Bosh sahifa
                  </div>
                </NavLink>
                <NavLink className="">
                  <div className="py-3 hover:text-amber-200 transition-all">
                    Nasr
                  </div>
                </NavLink>
                <NavLink className="">
                  <div className="py-3 hover:text-amber-200 transition-all">
                    Nazm
                  </div>
                </NavLink>
                <NavLink className="">
                  <div className="py-3 hover:text-amber-200 transition-all">
                    Maqolalar
                  </div>
                </NavLink>{" "}
                <NavLink className="">
                  <div className="py-3 hover:text-amber-200 transition-all">
                    Forum
                  </div>
                </NavLink>
              </div>
            </Drawer>
          </div>
          <Link to={"/"} className="text-[25px] font-normal text-[#c9ac8c]  ">
            <h1 className="relative   font-light text-[#c4a380] tracking-wide font-['Great_Vibes']">
              Badiiyat
            </h1>
          </Link>
        </div>

        <div className="flex items-center gap-20">
          <div className="text-white flex items-center gap-10 max-[768px]:hidden">
            <NavLink className="">
              <div className="py-6 hover:text-amber-200 transition-all ">
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

          <div
            onClick={handleAuthorization}
            className=" rounded-full w-fit overflow-hidden">
            <img
              className="w-10 h-10"
              src={User.profileImage || defUser}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
