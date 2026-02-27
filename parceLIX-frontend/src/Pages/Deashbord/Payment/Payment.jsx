import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxios from "../../../Hooks/AxiousBackendLInk/useAxious";

const Payment = () => {
  const { id } = useParams();
  const axiousInstance = useAxios();
  const { data } = useQuery({
    queryKey: ["payment", id],
    queryFn: async () => {
      const data = await axiousInstance.get(`/user/${id}`);
      return data?.data;
    },
  });
  const handlePayment= async()=>{
    const userInfo={
      parcelId:data?._id,
      cost:data?.cost,
      parcelName:data?.parcelName,
      senderEmail:data?.senderEmail
    }
    const result=await axiousInstance.post("/payment",userInfo)
    window.location=result.data.url
  }

  return (
    <div className="w-full">
      <div className="bg-white shadow-2xl rounded-2xl m-auto  p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-color">
          Payment Details
        </h2>

        {/* Parcel Info */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Sender Info */}
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h3 className="text-xl font-semibold  mb-3 text-gray-700">
              Sender Information
            </h3>
            <p>
              <span className="font-medium">Name:</span> {data?.senderName}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {data?.senderPhone}
            </p>
            <p>
              <span className="font-medium">Region:</span> {data?.senderRegion}
            </p>
            <p>
              <span className="font-medium">District:</span>{" "}
              {data?.senderDistrict}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {data?.senderAddress}
            </p>
          </div>

          {/* Receiver Info */}
          <div className="bg-gray-50 p-5 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-700">
              Receiver Information
            </h3>
            <p>
              <span className="font-medium">Name:</span> {data?.reciverName}
            </p>
            <p>
              <span className="font-medium">Phone:</span> {data?.reciverPhone}
            </p>
            <p>
              <span className="font-medium">Region:</span>{" "}
              {data?.receiverRegion}
            </p>
            <p>
              <span className="font-medium">District:</span>{" "}
              {data?.reciverDistrict}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {data?.reciverAddress}
            </p>
          </div>
        </div>

        {/* Parcel Summary */}
        <div className="mt-8 bg-indigo-50 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-4 text-indigo-700">
            Parcel Summary
          </h3>
          <p>
            <span className="font-medium">Parcel Name:</span> {data?.parcelName}
          </p>
          <p>
            <span className="font-medium">Weight:</span> {data?.parcelWeight} kg
          </p>
          <p>
            <span className="font-medium">Price:</span> {data?.cost} Taka
          </p>
        </div>

        {/* Payment Button */}
        <div className="mt-8 text-center">
          <button onClick={handlePayment} className="background-color text-white px-8 py-2 rounded-xl text-lg font-semibold transition duration-300 shadow-lg">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
