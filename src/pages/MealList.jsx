import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const MealList = () => {
  const [meals, setMeal] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState("");
  const [mealType, setMealType] = useState("");
  const [studentId, setStudentId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editMeal, setEditMeal] = useState();
  const [filterId, setfilterId] = useState(0);

  const [loading, setLoading] = useState("");

  const fetchMeal = async () => {
    try {
      const res = await axios.get(
        `https://localhost:44357/api/Meal` /*{
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      }*/
      );
      setMeal(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(meals);
  useEffect(() => {
    fetchMeal();
  }, [edit, count]);

  //edit handler
  const editHandler = (meal) => {
    setEdit(true);
    setEditMeal(meal);
  };
  //edit Meal

  const data = {
    id: id,
    mealType: mealType,
    studentId: studentId,
  };
  const EditMeal = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "put",
        url: `https://localhost:44357/api/Meal/${editMeal.id}`,
        data: data,
        /* headers: {
          token: JSON.parse(localStorage.getItem("token")),
        }, */
      });
      if (res) {
        setLoading(false);
        setEdit(false);
      }
    } catch (err) {
      setLoading(false);
    }
  };

  const deleteHandler = async (meal) => {
    await axios
      .delete(`https://localhost:44357/api/Meal/${meal.id}`)
      .then(() => {
        setCount(count + 1);
      })
      .catch((err) => {});
  };

  const getHandler = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://localhost:44357/api/Meal/${filterId}`)
      .then((res) => {
        const filterMeal = res.data;
        setMeal(meals.filter((std) => std.id === filterMeal.id));
      })
      .catch((err) => {});
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-100">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 className="text-xl font-bold">Meal List</h2>
              <div className="text-end">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div className="relative">
                    <input
                      type="number"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Meal ID"
                      onChange={(e) => setfilterId(e.target.value)}
                    />
                  </div>
                  <button
                    className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-green-600 shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-200"
                    type="submit"
                    onClick={(e) => getHandler(e)}
                  >
                    Search by ID
                  </button>
                </form>
              </div>
            </div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Meal Type
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Student ID
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {meals?.map((meal) => (
                      <tr key={meal.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {meal.id}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {meal.mealType}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {meal.studentId}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => editHandler(meal)}
                            className="px-5 py-5 text-green-600 hover:text-green-900"
                          >
                            Edit
                          </button>
                          {
                            <button
                              className="px-5 py-5 text-red-600 hover:text-red-900"
                              onClick={() => deleteHandler(meal)}
                            >
                              Delete
                            </button>
                          }
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* edit meal */}

          {edit && (
            <div className="my-10 top-16 w-3/6 left-90 bg-white shadow-lg py-10 px-20 absolute">
              <div className="text-right">
                <button className="ml-auto" onClick={() => setEdit(false)}>
                  <IoMdClose className="text-right text-xl" />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-between">
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Meal ID:
                  </label>
                  <input
                    onChange={(e) => setId(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={id}
                    placeholder="Meal ID"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="mealType"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Meal Type:
                  </label>
                  <input
                    onChange={(e) => setMealType(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={mealType}
                    placeholder="Meal Type"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="studentId"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Student ID:
                  </label>
                  <input
                    onChange={(e) => setStudentId(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={studentId}
                    placeholder="Student ID"
                  />
                </div>
              </div>

              <button
                onClick={() => EditMeal()}
                type="button"
                className="my-4 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                {loading ? "Loading..." : "Save"}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MealList;
