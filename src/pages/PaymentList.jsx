import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

const PaymentList = () => {
  const [payments, setPayment] = useState([]);
  const [count, setCount] = useState(0);
  const [id, setId] = useState("");
  const [amount, setAmount] = useState(0); 
  const [modeOfPayment, setModeOfPayment] = useState("");
  const [status, setStatus] = useState("");
  const [bookingId, setBookingId] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editPayment, setEditPayment] = useState();
  const [filterId, setfilterId] = useState(0);

  const [loading, setLoading] = useState("");

  const fetchPayment = async () => {
    try {
      const res = await axios.get(
        `https://localhost:44357/api/Payment` /*{
        headers: {
          token: JSON.parse(localStorage.getItem("token")),
        },
      }*/
      );
      setPayment(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(payments);
  useEffect(() => {
    fetchPayment();
  }, [edit, count]);

  //edit handler
  const editHandler = (payment) => {
    setEdit(true);
    setEditPayment(payment);
  };
  //edit Payment

  const data = {
    id: id,
    amount: amount,
    modeOfPayment: modeOfPayment,
    status: status,
    bookingId: bookingId
  };
  const EditPayment = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "put",
        url: `https://localhost:44357/api/Payment/${editPayment.id}`,
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

  const deleteHandler = async (payment) => {
    await axios
      .delete(`https://localhost:44357/api/Payment/${payment.id}`)
      .then(() => {
        setCount(count + 1);
      })
      .catch((err) => {});
  };

  const getHandler = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://localhost:44357/api/Payment/${filterId}`)
      .then((res) => {
        const filterPayment = res.data;
        setPayment(payments.filter((std) => std.id === filterPayment.id));
      })
      .catch((err) => {});
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 max-w-100">
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="py-8">
            <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
              <h2 className="text-xl font-bold">Payment List</h2>
              <div className="text-end">
                <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
                  <div className="relative">
                    <input
                      type="number"
                      className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      placeholder="Payment ID"
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
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Mode of Payment
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                      >
                        Booking ID
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments?.map((payment) => (
                      <tr key={payment.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {payment.id}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {payment.amount}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {payment.modeOfPayment}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {payment.status}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {payment.bookingId}
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <button
                            onClick={() => editHandler(payment)}
                            className="px-5 py-5 text-green-600 hover:text-green-900"
                          >
                            Edit
                          </button>
                          {
                            <button
                              className="px-5 py-5 text-red-600 hover:text-red-900"
                              onClick={() => deleteHandler(payment)}
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
          {/* edit payment */}

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
                    Payment ID:
                  </label>
                  <input
                    onChange={(e) => setId(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={id}
                    placeholder="Payment ID"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="amount"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Amount:
                  </label>
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={amount}
                    placeholder="Amount"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="modeOfPayment"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Mode of Payment:
                  </label>
                  <input
                    onChange={(e) => setModeOfPayment(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={modeOfPayment}
                    placeholder="Mode of Payment"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="status"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Status:
                  </label>
                  <input
                    onChange={(e) => setStatus(e.target.value)}
                    type="text"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={status}
                    placeholder="Status"
                  />
                </div>
                <div className="relative px-2 w-1/2">
                  <label
                    htmlFor="bookingId"
                    className="block text-md py-3 font-medium text-gray-700"
                  >
                    Booking ID:
                  </label>
                  <input
                    onChange={(e) => setBookingId(e.target.value)}
                    type="number"
                    className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                    value={bookingId}
                    placeholder="Booking ID"
                  />
                </div>
              </div>

              <button
                onClick={() => EditPayment()}
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

export default PaymentList;
