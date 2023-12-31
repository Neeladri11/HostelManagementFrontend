import axios from "axios";
import React, { useState } from "react";

const AddHostel = () => {
  const [noOfStudents, setNoOfStudents] = useState(0);
  const [noOfRooms, setNoOfRooms] = useState(0);
  const [noOfAvailableRooms, setNoOfAvailableRooms] = useState(0);
  const [loading, setLoading] = useState("");

  const data = {
    noOfStudents: noOfStudents,
    noOfRooms: noOfRooms,
    noOfAvailableRooms: noOfAvailableRooms,
  };
  console.log(data);
  const AddHostel = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: `https://localhost:44357/api/Hostel`,
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
      <h4 className="text-xl font-bold">Add new Hostel</h4>
      <div className="my-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative px-2 w-1/2">
            <label
              for="noOfStudents"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Number of Students :
            </label>
            <input
              onChange={(e) => setNoOfStudents(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Number of Students"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="noOfRooms"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Number of Rooms :
            </label>
            <input
              onChange={(e) => setNoOfRooms(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Number of Rooms"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="noOfAvailableRooms"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Number of Available Rooms :
            </label>
            <input
              onChange={(e) => setNoOfAvailableRooms(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Number of Available Rooms"
            />
          </div>
        </div>
        <button
          onClick={() => AddHostel()}
          type="button"
          className="my-4 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          {loading ? "Loading..." : "Save"}
        </button>
      </div>
    </section>
  );
};

export default AddHostel;
