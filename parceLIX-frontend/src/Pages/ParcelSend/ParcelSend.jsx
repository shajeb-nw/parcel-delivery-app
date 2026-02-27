import React, { use, useEffect, useMemo, useState } from "react";
import Container from "../../Component/Container/Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/AxiousBackendLInk/useAxious";
import { AuthContext } from "../../Hooks/useContext/FormContext/AuthContext";

const ParcelSend = () => {
  const [data, setData] = useState([]);
  // const [myRegion, setMyRegion] = useState([]);
  const axiosInstance = useAxios();
  const { users } = use(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    // formState: { errors },
  } = useForm();
  const senderRegion = watch("senderRegion");
  const reciverRegion = watch("receiverRegion");
  const onSubmit = (data) => {
    const {
      documentType,
      // parcelName,
      parcelWeight,
      // senderName,
      // senderAddress,
      // senderEmail,
      // senderPhone,
      // senderRegion,
      senderDistrict,
      // reciverName,
      // reciverEmail,
      // reciverAddress,
      // reciverPhone,
      // receiverRegion,
      reciverDistrict,
    } = data;

    const isSmaeDistrict = senderDistrict === reciverDistrict;
    const parcelw = parseFloat(parcelWeight);
    let cost = 0;
    if (documentType === "document") {
      cost = isSmaeDistrict ? 60 : 80;
    } else {
      if (parcelw > 3) {
        const minumCharge = isSmaeDistrict ? 110 : 150;
        const extraWeight = parcelw - 3;
        const extraCharge = isSmaeDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minumCharge + extraCharge;
      } else {
        cost = isSmaeDistrict ? 110 : 150;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Are you agree the cost?",
      text: `you will be charge ${cost} !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance.post("/user", data).then((res) => {
          console.log(res);
        });
      }
    });
  };

  // fetch data useeffect
  useEffect(() => {
    axios("/warehouses.json").then((res) => {
      setData(res?.data);
    });
  }, []);
  //get all reason in this useMemo
  const allRegion = useMemo(() => {
    if (!data?.length) return [];
    return [...new Set(data.map((res) => res.region))];
  }, [data]);

  const filterDistrictBySender = useMemo(() => {
    if (!senderRegion) return [];
    const allRegion = data?.filter((items) => items.region === senderRegion);
    const SenderDistrict = allRegion?.map((items) => items.district);
    setValue("senderDistrict", "");
    return SenderDistrict;
  }, [data, senderRegion, setValue]);

  const filterDistrictByReciver = useMemo(() => {
    if (!reciverRegion) return [];
    const allRegion = data?.filter((items) => items.region === reciverRegion);
    const reciverDistrict = allRegion?.map((items) => items.district);
    setValue("senderDistrict", "");
    return reciverDistrict;
  }, [data, reciverRegion, setValue]);

  return (
    <Container className="py-12">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4">Send A Parcel</h1>

        <h3 className="text-gray-500 mb-6 border-b pb-2">
          Enter your parcel details
        </h3>

        <form className="" onSubmit={handleSubmit(onSubmit)}>
          {/* Parcel Type */}
          <div className="mb-6">
            <label className="mr-6">
              <input
                type="radio"
                value="document"
                {...register("documentType", { required: true })}
              />
              <span className="ml-2">Document</span>
            </label>

            <label>
              <input
                type="radio"
                value="not-document"
                {...register("documentType", { required: true })}
              />
              <span className="ml-2">Not-Document</span>
            </label>
          </div>

          {/* Parcel Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block mb-1">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                required
                className="w-full border p-2 rounded"
                {...register("parcelName")}
              />
            </div>

            <div>
              <label className="block mb-1">Parcel Weight (KG)</label>
              <input
                type="number"
                placeholder="Parcel Weight"
                required
                className="w-full border p-2 rounded"
                {...register("parcelWeight")}
              />
            </div>
          </div>

          {/* Sender Details */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="font-semibold mb-4">Sender Details</h4>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Sender Name"
                  defaultValue={users?.displayName}
                  required
                  className="w-full border p-2 rounded"
                  {...register("senderName")}
                />
                <input
                  type="email"
                  placeholder="Sender email"
                  defaultValue={users?.email}
                  required
                  className="w-full border p-2 rounded"
                  {...register("senderEmail")}
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  required
                  className="w-full border p-2 rounded"
                  {...register("senderPhone")}
                />

                <select
                  className="w-full border p-2 rounded"
                  {...register("senderRegion", { required: true })}
                  required
                >
                  <option value={""}>Select Region</option>
                  {allRegion.map((res, index) => (
                    <option key={index} value={res}>
                      {res}
                    </option>
                  ))}
                </select>

                <select
                  className="w-full border p-2 rounded"
                  {...register("senderDistrict", { required: true })}
                  required
                >
                  <option value={""}>Select District</option>
                  {filterDistrictBySender?.map((res, index) => (
                    <option key={index} value={res}>
                      {res}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Sender Address"
                  required
                  className="w-full border p-2 rounded"
                  {...register("senderAddress")}
                />
              </div>
            </div>

            {/* Receiver Details */}
            <div>
              <h4 className="font-semibold mb-4">Receiver Details</h4>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Receiver Name"
                  required
                  className="w-full border p-2 rounded"
                  {...register("reciverName")}
                />
                <input
                  type="email"
                  placeholder="Receiver Email"
                  required
                  className="w-full border p-2 rounded"
                  {...register("reciverEmail")}
                />
               
                <input
                  type="text"
                  placeholder="Receiver Phone"
                  className="w-full border p-2 rounded"
                  required
                  {...register("reciverPhone")}
                />

                <select
                  className="w-full border p-2 rounded"
                  {...register("receiverRegion", { required: true })}
                  required
                >
                  <option value={""}>Select Region</option>
                  {allRegion.map((res, index) => (
                    <option key={index} value={res}>
                      {res}
                    </option>
                  ))}
                </select>

                <select
                  className="w-full border p-2 rounded"
                  {...register("reciverDistrict", { required: true })}
                  required
                >
                  <option value={""}>Select District</option>
                  {filterDistrictByReciver?.map((items, index) => (
                    <option key={index} value={items}>
                      {items}
                    </option>
                  ))}
                </select>

                 <input
                  type="text"
                  placeholder="Receiver Address"
                  required
                  className="w-full border p-2 rounded"
                  {...register("reciverAddress")}
                />
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            * Pickup Time 4pm-7pm Approx.
          </p>

          <button className="mt-6 background-color text-white px-6 py-2 rounded">
            Confirm Booking
          </button>
        </form>
      </div>
    </Container>
  );
};

export default ParcelSend;
