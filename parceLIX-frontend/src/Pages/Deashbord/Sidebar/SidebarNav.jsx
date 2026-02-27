import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React, { useState } from "react";
import { Boxes, CarFront, Group, HandCoins, LogIn, LogOut, Truck } from "lucide-react";
import { NavLink } from "react-router";

const SidebarNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex bg-white h-full">
      <Sidebar collapsed={collapsed}>
        {/* <main c> */}
        <div className="flex justify-end mr-5 mt-5">
          <button
            className="sb-button"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <LogIn />
            ) : (
              <div className="rotate-180">
                <LogIn />
              </div>
            )}
          </button>
        </div>
        {/* </main> */}
        <div>
          <div className="font-bold text-[16px] text-black/60 ml-5">Menu</div>
          <Menu>
            <MenuItem icon={<Group />} component={<NavLink to="/deashbord" />}>
              Dashboard
            </MenuItem>

            <MenuItem
              icon={<CarFront />}
              component={<NavLink to="/deashbord/parcelsend" />}
            >
              Send Parcel
            </MenuItem>

            <MenuItem
              icon={<Boxes />}
              component={<NavLink to="/deashbord/myparcel" />}
            >
              My Parcel
            </MenuItem>

            <MenuItem
              icon={<HandCoins />}
              component={<NavLink to="/deashbord/payment-history" />}
            >
              Payment History
            </MenuItem>

            <MenuItem
              icon={<Truck />}
              component={<NavLink to="" />}
            >
              Deliveries
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarNav;
