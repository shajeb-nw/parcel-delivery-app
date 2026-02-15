import React, { useContext } from "react";
import { AuthContext } from "../Hooks/useContext/FormContext/AuthContext";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
const Avator = () => {
  const { users,signout} = useContext(AuthContext);
  const { displayName, email, photoURL } = users;
  const handelclick= async()=>{
    try {
       await signout();
       toast.success("login out successful!")
      
     } catch (error) {
       toast.error(error.message)
     }
  }
  return (
    <div className="dropdown relative">
      <div
        tabIndex={0}
        role="button"
        className="w-12 h-12 rounded-full  flex items-center justify-center"
      >
        <img src={users?.photoURL} alt="user image" className="w-full h-full object-cover rounded-full"/>
      </div>
      <div tabIndex="-1" className="dropdown-content menu">
        <div className="absolute right-0 top-0 z-100 bg-white shadow-lg rounded-md text-center">
          <div className="m-4 rounded-md p-2 px-10 bg-black/6">
            <div
              tabIndex={0}
              role="button"
              className="w-12 h-12 m-auto rounded-full border border-black/10  flex items-center justify-center"
            >
              <img src={photoURL} className="w-full h-full rounded-full object-cover" alt="user image" />
            </div>
            <strong className="capitalize text-[16px]">{displayName}</strong>
            <div>{email}</div>
          </div>

          <div className="mx-4 pb-3">
             <button onClick={handelclick} className="background-color cursor-pointer text-white font-bold rounded-md py-2 w-full ">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avator;
