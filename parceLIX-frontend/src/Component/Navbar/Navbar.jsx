import { Link } from "react-router";
import Logo from "../../Utils/Logo";
import { useContext } from "react";
import { AuthContext } from "../../Hooks/useContext/FormContext/AuthContext";
import Avator from "../../Utils/Avator";
import { BeatLoader } from "react-spinners";

const Navbar = () => {
  const { users, loading } = useContext(AuthContext);

  return (
    <nav className="w-full bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="">
            <Logo></Logo>
          </div>

          {/* Menu */}
          <ul className="max-[875px]:hidden flex items-center justify-center gap-8 text-gray-600 font-medium">
            <li className="hover:text-black cursor-pointer">Services</li>
            <li className="hover:text-black cursor-pointer">Coverage</li>
            <li className="hover:text-black cursor-pointer">About Us</li>
            <li className="hover:text-black cursor-pointer">Pricing</li>
            <li className="hover:text-black cursor-pointer">Be a Rider</li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {loading ? (
              <BeatLoader size={10} color="#AB47BC"/>
            ) : users ? (
              <Avator></Avator>
            ) : (
              <Link
                to={"/signin"}
                className="background-color text-white px-6 py-2 rounded-full font-semibold"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
