import Logo from "../../Utils/Logo";

const Navbar = () => {
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
            <button className="background-color text-white px-6 py-3 rounded-full font-semibold">
              Send Parcel
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
