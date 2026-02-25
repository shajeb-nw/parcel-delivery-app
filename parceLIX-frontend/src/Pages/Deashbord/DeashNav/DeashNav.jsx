import React, { useContext } from "react";
import Logo from "../../../Utils/Logo";
import { Link } from "react-router";
import { AuthContext } from "../../../Hooks/useContext/FormContext/AuthContext";

const DeashNav = () => {
  const {users} = useContext(AuthContext);
  return (
    <div className="bg-white w-full h-15 flex justify-between items-center px-10">
      <Link to={"/"}>
        <Logo></Logo>
      </Link>
      <div>
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 rounded-full  flex items-center justify-center cursor-pointer">
            <img
              src={users?.photoURL}
              alt="user image"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col  gap-[-2px]">
             <span className="capitalize font-bold text-black/80">{users?.displayName}</span>
             <span className="text-[12px] font-bold text-black/50 text-center">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeashNav;
