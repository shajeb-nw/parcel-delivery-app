import React from "react";
import riderImg from "../../assets/agent-pending.png"; // use your image path

const BeARider = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE FORM */}
        <div>
          <h1 className="text-4xl font-bold text-teal-900 mb-3">Be a Rider</h1>

          <p className="text-gray-600 mb-8 max-w-lg">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <h3 className="text-xl font-semibold text-teal-900 mb-6 border-b pb-2">
            Tell us about yourself
          </h3>

          <form className="space-y-4">
            <Input label="Your Name" placeholder="Your Name" />
            <Input
              label="Driving License Number"
              placeholder="Driving License Number"
            />
            <Input label="Your Email" placeholder="Your Email" type="email" />

            {/* Region Select */}
            <Select label="Your Region" placeholder="Select your Region" />

            {/* District Select */}
            <Select label="Your District" placeholder="Select your District" />

            <Input label="NID No" placeholder="NID" />
            <Input label="Phone Number" placeholder="Phone Number" />
            <Input
              label="Bike Brand Model and Year"
              placeholder="Bike Brand Model and Year"
            />
            <Input
              label="Bike Registration Number"
              placeholder="Bike Registration Number"
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tell Us About Yourself
              </label>
              <textarea
                rows="3"
                placeholder="Tell Us About Yourself"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-lime-400 focus:outline-none"
              ></textarea>
            </div>

            <button
             type="button"
              className="w-full background-color text-white font-semibold py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:flex justify-center">
          <img src={riderImg} alt="Rider" className="max-w-md w-full" />
        </div>
      </div>
    </div>
  );
};

/* Reusable Input Component */
const Input = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-lime-400 focus:outline-none"
    />
  </div>
);

/* Reusable Select Component */
const Select = ({ label, placeholder }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      className="w-full px-4 py-2 border rounded-md text-gray-500 focus:ring-2 focus:ring-lime-400 focus:outline-none"
      defaultValue=""
    >
      <option value="" disabled>
        {placeholder}
      </option>
      <option>Dhaka</option>
      <option>Chittagong</option>
      <option>Sylhet</option>
    </select>
  </div>
);

export default BeARider;
