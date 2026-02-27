import React, { useContext } from "react";
import useAxios from "../../../Hooks/AxiousBackendLInk/useAxious";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Hooks/useContext/FormContext/AuthContext";

const PayHistory = () => {
  const axiousInstance = useAxios();
  const { users } = useContext(AuthContext);

  const { data } = useQuery({
    queryKey: ["paymentHistory", users?.email],
    queryFn: async () => {
      const result = await axiousInstance(`/payment?email=${users?.email}`);
      return result?.data;
    },
  });

  return (
    <div className="">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment History</h2>

      <div className="overflow-x-auto">
        <table className="table w-full ">
          <thead className="bg-gray-100">
            <tr>
              <th>#</th>
              <th>Parcel Name</th>
              <th>Amount (Taka)</th>
              <th>Status</th>
              <th>Transaction ID</th>
              <th>Tracking ID</th>
              <th>Paid At</th>
            </tr>
          </thead>

          <tbody>
            {data?.length > 0 ? (
              data.map((res, index) => (
                <tr key={res._id} className="hover">
                  <td>{index + 1}</td>
                  <td>{res.parcelName}</td>
                  <td>{res.totalAmount}</td>
                  <td>
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                      {res.paymentStatus}
                    </span>
                  </td>
                  <td className="text-xs">{res.transationId}</td>
                  <td>{res.trackingId}</td>
                  <td>{new Date(res.paidAt).toLocaleString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-6 text-gray-500">
                  No Payment History Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PayHistory;
