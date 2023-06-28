import axios from "axios";
import React, { useState } from "react";

const AddBooking = () => {
  const [bookingDate, setBookingDate] = useState(new Date());
  const [durationOfStay, setDurationOfStay] = useState(0);
  const [studentId, setStudentId] = useState(0);
  const [loading, setLoading] = useState("");

  const data = {
    bookingDate: bookingDate,
    durationOfStay: durationOfStay,
    studentId: studentId,
  };
  console.log(data);
  const AddBooking = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: `https://localhost:44357/api/Booking`,
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
      <h4 className="text-xl font-bold">Add new Booking</h4>
      <div className="my-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative px-2 w-1/2">
            <label
              for="bookingDate"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Booking Date :
            </label>
            <input
              onChange={(e) => setBookingDate(e.target.value)}
              type="date"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Booking Date"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="durationOfStay"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Duration of Stay :
            </label>
            <input
              onChange={(e) => setDurationOfStay(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Duration of Stay"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="studentId"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Student ID :
            </label>
            <input
              onChange={(e) => setStudentId(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Student ID"
            />
          </div>
        </div>
        <button
          onClick={() => AddBooking()}
          type="button"
          className="my-4 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          {loading ? "Loading..." : "Save"}
        </button>
      </div>
    </section>
  );
};

export default AddBooking;