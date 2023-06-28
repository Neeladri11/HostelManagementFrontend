import axios from "axios";
import React, { useState } from "react";

const AddPayment = () => {
  const [amount, setAmount] = useState(0); 
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [status, setStatus] = useState("");
  const [bookingId, setBookingId] = useState(0);
  const [loading, setLoading] = useState("");

  const data = {
    amount: amount,
    modeOfPayment: modeOfPayment,
    status: status,
    bookingId: bookingId
  };
  console.log(data);
  const AddPayment = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: `https://localhost:44357/api/Payment`,
        data: data,
        /*
        headers: {
          token: JSON.parse(localStorage.getItem('token'))
        }*/
      });
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 sm:px-8 max-w-100">
      <h4 className="text-xl font-bold">Add new Payment</h4>
      <div className="my-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative px-2 w-1/2">
            <label
              for="amount"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Amount :
            </label>
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Amount"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="modeOfPayment"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Mode of Payment :
            </label>
            <input
              onChange={(e) => setModeOfPayment(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Mode of Payment"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="status"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Status :
            </label>
            <input
              onChange={(e) => setStatus(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Status"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="bookingId"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Booking ID :
            </label>
            <input
              onChange={(e) => setBookingId(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Booking ID"
            />
          </div>
        </div>
        <button
          onClick={() => AddPayment()}
          type="button"
          className="my-4 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          {loading ? "Loading..." : "Save"}
        </button>
      </div>
    </section>
  );
};

export default AddPayment;
