import axios from "axios";
import React, { useState } from "react";

const AddHostel = () => {
  const [HostelStatus, setHostelStatus] = useState("");
  const [floorNo, setFloorNo] = useState(0);
  const [hostelId, setHostelId] = useState(0);
  const [loading, setLoading] = useState("");

  const data = {
    HostelStatus: HostelStatus,
    floorNo: floorNo,
    hostelId: hostelId,
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
              for="HostelStatus"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Hostel Status :
            </label>
            <input
              onChange={(e) => setHostelStatus(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Hostel Status"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="floorNo"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Floor Number :
            </label>
            <input
              onChange={(e) => setFloorNo(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Floor Number"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="hostelId"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Hostel ID :
            </label>
            <input
              onChange={(e) => setHostelId(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Hostel ID"
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
