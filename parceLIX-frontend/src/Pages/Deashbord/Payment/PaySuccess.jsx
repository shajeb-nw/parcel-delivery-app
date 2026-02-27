import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import useAxios from "../../../Hooks/AxiousBackendLInk/useAxious";

const PaySuccess = () => {
  const [getParams] = useSearchParams();
  const navigate=useNavigate()
  const axiousInstance = useAxios();
  const payParams = getParams.get("session_id");
  useEffect(() => {
    if (payParams) {
      axiousInstance.patch(`/payment-success?session_id=${payParams}`);
    }
  });
  return (
    <div>
      <div className="text-color text-6xl mb-4">✓</div>
      <h2 className="text-5xl font-bold mb-2 text-color">
        Payment Successful!
      </h2>
      <p className="text-gray-600 mb-4">
        Your parcel payment has been completed successfully.
      </p>
      <p className="text-sm text-gray-400 mb-6">Redirecting to My Parcels...</p>
      <button onClick={()=>navigate("/deashbord/myparcel")} className="background-color text-white px-6 py-2 rounded-lg font-semibold">
        
        Go To My Parcels
      </button>
    </div>
  );
};

export default PaySuccess;
