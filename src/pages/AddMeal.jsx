import axios from "axios";
import React, { useState } from "react";

const AddMeal = () => {
  const [mealType, setMealType] = useState("");
  const [studentId, setStudentId] = useState(0);
  const [loading, setLoading] = useState("");

  const data = {
    mealType: mealType,
    studentId: studentId,
  };
  console.log(data);
  const AddMeal = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: `https://localhost:44357/api/Meal`,
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
      <h4 className="text-xl font-bold">Add new Meal</h4>
      <div className="my-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative px-2 w-1/2">
            <label
              for="mealType"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Meal Type :
            </label>
            <input
              onChange={(e) => setMealType(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="Meal Type"
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
          onClick={() => AddMeal()}
          type="button"
          className="my-4 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          {loading ? "Loading..." : "Save"}
        </button>
      </div>
    </section>
  );
};

export default AddMeal;