import axios from "axios";
import React, { useState } from "react";

const AddStudent = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(new Date());
  const [address, setAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState(0);
  const [guardianName, setGuardianName] = useState("");
  const [guardianPhno, setGuardianPhno] = useState(0);
  const [mealServices, setMealServices] = useState("");
  const [laundryServices, setLaundryServices] = useState("");
  const [RoomId, setRoomId] = useState(0);
  const [loading, setLoading] = useState("");

  const data = {
    studentName: name,
    gender: gender,
    dob: dob,
    address: address,
    phoneNo: phoneNo,
    guardianName: guardianName,
    guardianPhno: guardianPhno,
    mealServices: mealServices,
    laundryServices: laundryServices,
    roomId: RoomId,
  };
  console.log(data);
  const AddStudent = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: "post",
        url: `https://localhost:44357/api/Student`,
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
      <h4 className="text-xl font-bold">Add new student in list</h4>
      <div className="my-10">
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative px-2 w-1/2">
            <label
              for="name"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Full Name :
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student full name"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="name"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Gender :
            </label>
            <input
              onChange={(e) => setGender(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's Gender"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="name"
              className="block text-md py-3 font-medium text-gray-700"
            >
              DOB :
            </label>
            <input
              onChange={(e) => setDob(e.target.value)}
              type="date"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's DOB"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="name"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Address :
            </label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's address"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="name"
              className="block text-md py-3 font-medium text-gray-700"
            >
              phone number :
            </label>
            <input
              onChange={(e) => setPhoneNo(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's hall name"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="id"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Gurdian name :
            </label>
            <input
              onChange={(e) => setGuardianName(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's gurdian name"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="id"
              className="block text-md py-3 font-medium text-gray-700"
            >
              Gurdian phone number :
            </label>
            <input
              onChange={(e) => setGuardianPhno(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's gurdian phone number"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="id"
              className="block text-md py-3 font-medium text-gray-700"
            >
              student meal service :
            </label>
            <input
              onChange={(e) => setMealServices(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's meal service"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="id"
              className="block text-md py-3 font-medium text-gray-700"
            >
              student laundry service :
            </label>
            <input
              onChange={(e) => setLaundryServices(e.target.value)}
              type="text"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's laundry service"
            />
          </div>
          <div className="relative px-2 w-1/2">
            <label
              for="id"
              className="block text-md py-3 font-medium text-gray-700"
            >
              student room id :
            </label>
            <input
              onChange={(e) => setRoomId(e.target.value)}
              type="number"
              className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
              placeholder="student's laundry service"
            />
          </div>
        </div>
        <button
          onClick={() => AddStudent()}
          type="button"
          className="my-4 mx-2 py-2 px-4  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
        >
          {loading ? "Loading..." : "Save"}
        </button>
      </div>
    </section>
  );
};

export default AddStudent;
