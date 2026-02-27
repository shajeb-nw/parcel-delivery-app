import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Hooks/useContext/FormContext/AuthContext";
import useAxios from "../../Hooks/AxiousBackendLInk/useAxious";
import Swal from "sweetalert2";
import { Link } from "react-router";


const MyParcel = () => {
  const { users } = useContext(AuthContext);
  const axiosInstance = useAxios();
  const { data, refetch } = useQuery({
    queryKey: ["my-parcel", users?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/user?email=${users?.email}`);
      return res?.data;
    },
  });
  const buttonClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be delete on your parcel!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.delete(`/user/${id}`).then(() => {
          refetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        });
      }
    });
  };
  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">Parcel Details</h1>

      {data?.map((res) => (
        <div
          key={res._id}
          className=" mb-10 space-y-8 bg-white p-10 rounded-md"
        >
          <div className="grid grid-cols-2 gap-6">
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
                <span className="font-medium ">District:</span>{" "}
                {res.senderDistrict}
              </p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {res.senderAddress}
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
                <span className="font-medium">Region:</span>{" "}
                {res.receiverRegion}
              </p>
              <p>
                <span className="font-medium">District:</span>{" "}
                {res.reciverDistrict}
              </p>
              <p>
                <span className="font-medium">Address:</span>{" "}
                {res.reciverAddress}
              </p>
            </div>
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
              <span className="font-medium">Cost:</span> {res.cost} TAKA
            </p>

            <p>
              <span className="font-medium">Payment Status:</span> 
              {res?.payment_status==="paid"?
               <span className="text-blue-500">paid</span>
               :<Link to={`/deashbord/payment/${res._id}`} className="background-color text-white px-2 rounded-md text-[15px]">Please Pay!</Link>
              }
            </p>
            <p>
              <span className="font-medium">Tracking ID:</span> {res._id}
            </p>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => buttonClick(res._id)}
              className="background-color font-bold text-white/95 w-full   py-2 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyParcel;
