import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const HostelList = () => {
  const [hostels, setHostel] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState("");
  const [noOfStudents, setNoOfStudents] = useState(0);
  const [noOfRooms, setNoOfRooms] = useState(0);
  const [noOfAvailableRooms, setNoOfAvailableRooms] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editHostel, setEditHostel] = useState();
  const [filterId, setfilterId] = useState(0);
  const [loading, setLoading] = useState("");

  const fetchHostel = async () => {
    try {
      const res = await axios.get(
        `https://localhost:44357/api/Hostel` /*{
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      }*/
      );
      setHostel(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(hostels);
  useEffect(() => {
    fetchHostel();
  }, [edit, count]);

  //edit handler
  const editHandler = (hostel) => {
    setEdit(true);
    setEditHostel(hostel);
  };
  //edit Hostel

  const data = {
    id: id,
    noOfStudents: noOfStudents,
    noOfRooms: noOfRooms,
    noOfAvailableRooms: noOfAvailableRooms,
  };
  const EditHostel = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "put",
        url: `https://localhost:44357/api/Hostel/${editHostel.id}`,
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

  const deleteHandler = async (hostel) => {
    await axios
      .delete(`https://localhost:44357/api/Hostel/${hostel.id}`)
      .then(() => {
        setCount(count + 1);
      })
      .catch((err) => {});
  };

  const getHandler = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://localhost:44357/api/Hostel/${filterId}`)
      .then((res) => {
        const filterHostel = res.data;
        setHostel(hostels.filter((std) => std.id === filterHostel.id));
      })
      .catch((err) => {});
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-100">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 className="text-xl font-bold">Hostel List</h2>
              <div className="text-end">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div className="relative">
                    <input
                      type="number"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Hostel ID"
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
                        Number of Students
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Number of Rooms
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Number of Available Rooms
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {hostels?.map((hostel) => (
                      <tr key={hostel.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {hostel.id}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {hostel.noOfStudents}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {hostel.noOfRooms}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {hostel.noOfAvailableRooms}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => editHandler(hostel)}
                            className="px-5 py-5 text-green-600 hover:text-green-900"
                          >
                            Edit
                          </button>
                          {
                            <button
                              className="px-5 py-5 text-red-600 hover:text-red-900"
                              onClick={() => deleteHandler(hostel)}
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
          {/* edit hostel */}

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
                    htmlFor="id"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Hostel ID:
                  </label>
                  <input
                    onChange={(e) => setId(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={id}
                    placeholder="Hostel ID"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="noOfStudents"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Number of Students:
                  </label>
                  <input
                    onChange={(e) => setNoOfStudents(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={noOfStudents}
                    placeholder="Number of Students"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="noOfRooms"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Number of Rooms:
                  </label>
                  <input
                    onChange={(e) => setNoOfRooms(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={noOfRooms}
                    placeholder="Number of Rooms"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="noOfAvailableRooms"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Number of Available Rooms :
                  </label>
                  <input
                    onChange={(e) => setNoOfAvailableRooms(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={noOfAvailableRooms}
                    placeholder="Number of Available Rooms"
                  />
                </div>
              </div>

              <button
                onClick={() => EditHostel()}
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

export default HostelList;