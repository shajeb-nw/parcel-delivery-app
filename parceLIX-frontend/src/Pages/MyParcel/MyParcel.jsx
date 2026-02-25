import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Hooks/useContext/FormContext/AuthContext";
import useAxios from "../../Hooks/AxiousBackendLInk/useAxious";

const MyParcel = () => {
  const { users } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { data } = useQuery({
    queryKey: ["my-parcel", users?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/user?email=${users?.email}`);
      return res?.data;
    },
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Parcel Details</h1>

      {data?.map((res) => (
        <div
          key={res._id}
          className="grid md:grid-cols-2 gap-6 mb-10 bg-white p-10 rounded-md"
        >
          {/* Sender Info */}
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Sender Info</h2>

            <p>
              <span className="font-medium">Name:</span> {res.senderName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {res.senderEmail}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {res.senderPhone}
            </p>
            <p>
              <span className="font-medium">Region:</span> {res.senderRegion}
            </p>
            <p>
              <span className="font-medium">District:</span>{" "}
              {res.senderDistrict}
            </p>
            <p>
              <span className="font-medium">Address:</span> {res.senderAddress}
            </p>
          </div>

          {/* Receiver Info */}
          <div className="bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Receiver Info</h2>

            <p>
              <span className="font-medium">Name:</span> {res.reciverName}
            </p>
            <p>
              <span className="font-medium">Email:</span> {res.reciverEmail}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {res.reciverPhone}
            </p>
            <p>
              <span className="font-medium">Region:</span> {res.receiverRegion}
            </p>
            <p>
              <span className="font-medium">District:</span>{" "}
              {res.reciverDistrict}
            </p>
            <p>
              <span className="font-medium">Address:</span> {res.reciverAddress}
            </p>
          </div>

          {/* Parcel Details */}
          <div className="bg-gray-100 p-6 rounded-xl shadow md:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Parcel Details</h2>

            <p>
              <span className="font-medium">Parcel Name:</span> {res.parcelName}
            </p>
            <p>
              <span className="font-medium">Type:</span> {res.documentType}
            </p>
            <p>
              <span className="font-medium">Weight:</span> {res.parcelWeight} KG
            </p>
            <p>
              <span className="font-medium">Tracking ID:</span> {res._id}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyParcel;
