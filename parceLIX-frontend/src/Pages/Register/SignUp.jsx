import React from "react";
import deliveryImg from "../../assets/authImage.png";
import Logo from "../../Utils/Logo";
import { Link } from "react-router";
import ImageUpload from "../../Utils/ImageUpload ";
const SignUp = () => {
  return (
    <section className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to={"/"} className="">
            <Logo></Logo>
          </Link>

          {/* Title */}
          <h1 className="text-3xl font-bold mb-2 mt-5">Create a Account</h1>

          {/* Form */}
          <form className="space-y-4">

            <ImageUpload></ImageUpload>

            {/* {name} */}
            <div>
              <label className="block text-sm mb-1">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border  rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>
            {/* Email */}
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
              />
            </div>


            {/* Login Button */}
            <button className="w-full background-color w- text-white font-medium py-2 rounded-md transition">
              Register
            </button>

            {/* Register */}
            <p className="text-center text-sm text-gray-600">
              Don’t have any account?{" "}
              <Link to={"/signin"} className="text-lime-500 font-medium">
                Login
              </Link>
            </p>

            {/* OR */}
            <div className="text-center text-gray-400 text-sm">Or</div>

            {/* Google Button */}
            <button
              type="button"
              className="w-full flex items-center justify-center gap-2 border py-2 rounded-md hover:bg-gray-200 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="google"
                className="w-5 h-5"
              />
              Login with Google
            </button>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex w-1/2 background-color items-center justify-center">
        <img src={deliveryImg} alt="Delivery" className="w-[70%] max-w-md" />
      </div>
    </section>
  );
};

export default SignUp;
