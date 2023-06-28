import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const BookingList = () => {
  const [bookings, setBooking] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState("");
  const [bookingDate, setBookingDate] = useState(new Date());
  const [durationOfStay, setDurationOfStay] = useState(0);
  const [studentId, setStudentId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editBooking, setEditBooking] = useState();
  const [filterId, setfilterId] = useState(0);

  const [loading, setLoading] = useState("");

  const fetchBooking = async () => {
    try {
      const res = await axios.get(
        `https://localhost:44357/api/Booking` /*{
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      }*/
      );
      setBooking(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(bookings);
  useEffect(() => {
    fetchBooking();
  }, [edit, count]);

  //edit handler
  const editHandler = (booking) => {
    setEdit(true);
    setEditBooking(booking);
  };
  //edit Booking

  const data = {
    id: id,
    bookingDate: bookingDate,
    durationOfStay: durationOfStay,
    studentId: studentId,
  };
  const EditBooking = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "put",
        url: `https://localhost:44357/api/Booking/${editBooking.id}`,
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

  const deleteHandler = async (booking) => {
    await axios
      .delete(`https://localhost:44357/api/Booking/${booking.id}`)
      .then(() => {
        setCount(count + 1);
      })
      .catch((err) => {});
  };

  const getHandler = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://localhost:44357/api/Booking/${filterId}`)
      .then((res) => {
        const filterBooking = res.data;
        setBooking(bookings.filter((std) => std.id === filterBooking.id));
      })
      .catch((err) => {});
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-100">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 className="text-xl font-bold">Booking List</h2>
              <div className="text-end">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div className="relative">
                    <input
                      type="number"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Booking ID"
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
                        Booking Date
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Duration of Stay
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
                    {bookings?.map((booking) => (
                      <tr key={booking.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {booking.id}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {booking.bookingDate}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {booking.durationOfStay}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {booking.studentId}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => editHandler(booking)}
                            className="px-5 py-5 text-green-600 hover:text-green-900"
                          >
                            Edit
                          </button>
                          {
                            <button
                              className="px-5 py-5 text-red-600 hover:text-red-900"
                              onClick={() => deleteHandler(booking)}
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
          {/* edit booking */}

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
                    Booking ID:
                  </label>
                  <input
                    onChange={(e) => setId(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={id}
                    placeholder="Booking ID"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="bookingDate"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Booking Date:
                  </label>
                  <input
                    onChange={(e) => setBookingDate(e.target.value)}
                    type="date"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={bookingDate}
                    placeholder="Booking Date"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="durationOfStay"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Duration of Stay:
                  </label>
                  <input
                    onChange={(e) => setDurationOfStay(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={durationOfStay}
                    placeholder="Duration of Stay"
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
                onClick={() => EditBooking()}
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

export default BookingList;
