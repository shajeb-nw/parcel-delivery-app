import React from "react";
import riderImg from "../../assets/agent-pending.png";
import { useForm } from "react-hook-form";

const BeARider = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE FORM */}
        <div>
          <h1 className="text-3xl font-bold mb-6">Be a Rider</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label>Your Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border p-2 rounded"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* License */}
            <div>
              <label>Driving License Number</label>
              <input
                type="text"
                {...register("license", { required: "License is required" })}
                className="w-full border p-2 rounded"
              />
              {errors.license && (
                <p className="text-red-500 text-sm">{errors.license.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label>Your Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border p-2 rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Region */}
            <div>
              <label>Select Region</label>
              <select
                {...register("region", { required: "Region is required" })}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Region</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattogram">Chattogram</option>
                <option value="Sylhet">Sylhet</option>
              </select>
              {errors.region && (
                <p className="text-red-500 text-sm">{errors.region.message}</p>
              )}
            </div>

            {/* District */}
            <div>
              <label>Select District</label>
              <select
                {...register("district", { required: "District is required" })}
                className="w-full border p-2 rounded"
              >
                <option value="">Select District</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Gazipur">Gazipur</option>
                <option value="Cumilla">Cumilla</option>
              </select>
              {errors.district && (
                <p className="text-red-500 text-sm">
                  {errors.district.message}
                </p>
              )}
            </div>

            {/* NID */}
            <div>
              <label>NID No</label>
              <input
                type="text"
                {...register("nid", { required: "NID is required" })}
                className="w-full border p-2 rounded"
              />
              {errors.nid && (
                <p className="text-red-500 text-sm">{errors.nid.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                {...register("phone", { required: "Phone is required" })}
                className="w-full border p-2 rounded"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            <button className="w-full background-color text-white py-2 rounded">
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

export default BeARider;
