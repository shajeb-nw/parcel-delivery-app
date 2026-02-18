import React from 'react';

const ParcelSend = () => {
    return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-teal-900 mb-3">
          Send A Parcel
        </h1>

        <h3 className="text-lg font-semibold text-teal-900 mb-6 border-b pb-2">
          Enter your parcel details
        </h3>

        {/* Document Type */}
        <div className="flex items-center gap-8 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="parcelType"
              defaultChecked
              className="accent-lime-500"
            />
            <span className="text-gray-700">Document</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="parcelType"
              className="accent-lime-500"
            />
            <span className="text-gray-700">Not-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <Input label="Parcel Name" placeholder="Parcel Name" />
          <Input label="Parcel Weight (KG)" placeholder="Parcel Weight (KG)" />
        </div>

        {/* Sender & Receiver Section */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Sender Details */}
          <div>
            <h4 className="text-lg font-semibold text-teal-900 mb-4">
              Sender Details
            </h4>

            <div className="space-y-4">
              <Input label="Sender Name" placeholder="Sender Name" />
              <Input label="Address" placeholder="Address" />
              <Input label="Sender Phone No" placeholder="Sender Phone No" />
              <Select label="Your District" />
              
              <Textarea
                label="Pickup Instruction"
                placeholder="Pickup Instruction"
              />
            </div>
          </div>

          {/* Receiver Details */}
          <div>
            <h4 className="text-lg font-semibold text-teal-900 mb-4">
              Receiver Details
            </h4>

            <div className="space-y-4">
              <Input label="Receiver Name" placeholder="Receiver Name" />
              <Input label="Receiver Address" placeholder="Address" />
              <Input label="Receiver Contact No" placeholder="Receiver Contact No" />
              <Select label="Receiver District" />
              
              <Textarea
                label="Delivery Instruction"
                placeholder="Delivery Instruction"
              />
            </div>
          </div>
        </div>

        {/* Pickup Note */}
        <p className="text-sm text-gray-500 mt-6">
          * PickUp Time 4pm-7pm Approx.
        </p>

        {/* Button */}
        <button className="mt-6 bg-lime-400 hover:bg-lime-500 transition duration-300 text-white font-semibold px-8 py-2 rounded-md">
          Proceed to Confirm Booking
        </button>
      </div>
    </div>
  );
};

/* Reusable Input */
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

/* Reusable Select */
const Select = ({ label }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      className="w-full px-4 py-2 border rounded-md text-gray-500 focus:ring-2 focus:ring-lime-400 focus:outline-none"
      defaultValue=""
    >
      <option value="" disabled>
        Select your District
      </option>
      <option>Dhaka</option>
      <option>Chittagong</option>
      <option>Sylhet</option>
    </select>
  </div>
);

/* Reusable Textarea */
const Textarea = ({ label, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      rows="3"
      {...props}
      className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-lime-400 focus:outline-none"
    ></textarea>
  </div>
    );

export default ParcelSend;