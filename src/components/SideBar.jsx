import React from "react";
import { Link } from "react-router-dom";
import { FaWpforms, FaUsers } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";
import { TiHome, TiUserAdd } from "react-icons/ti";
import { CgLogOff } from "react-icons/cg";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiFoodChain } from "react-icons/gi";
import { FaBeer } from 'react-icons/fa';
//import { IconName } from "react-icons/lu";
import { BiSolidHotel } from "react-icons/bi";
import { MdLocalHotel } from "react-icons/md";

const SideBar = () => {
  const RemovedUser = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <aside
      className="bg-white dark:bg-gray-800"
      style={{ overflowY: "scroll",height:"90%"}}
    >
      <Link to="/dashboard" className="flex items-center justify-center mt-2">
        <AiOutlineDashboard className="text-xl mr-2 text-green-600" />
        <h4 className="text-center py-3 text-xl text-green-600 font-semibold">
          Dashboard
        </h4>
      </Link>
      <nav className="mt-6 px-6">
      <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="addHostel"
        >
          <span className="text-left text-green-600">
            <TiHome />
          </span>
          <span className="mx-4 text-sm font-normal">Add Hostel</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="hostelList"
        >
          <span className="text-left text-green-600">
            <TiHome />
          </span>
          <span className="mx-4 text-sm font-normal">Hostel List</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="addroom"
        >
          <span className="text-left text-green-600">
            <MdFastfood />
          </span>
          <span className="mx-4 text-sm font-normal">Add Room</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="roomlist"
        >
          <span className="text-left text-green-600">
            <MdLocalHotel />
          </span>
          <span className="mx-4 text-sm font-normal">Room List</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="addstudent"
        >
          <span className="text-left text-green-600">
            <TiUserAdd />
          </span>
          <span className="mx-4 text-sm font-normal">Add Student</span>
        </Link>   
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="studentlist"
        >
          <span className="text-left text-green-600">
            <FaUsers />
          </span>
          <span className="mx-4 text-sm font-normal">Student List</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="addMeal"
        >
          <span className="text-left text-green-600">
            <MdFastfood />
          </span>
          <span className="mx-4 text-sm font-normal">Add Meal</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="mealList"
        >
          <span className="text-left text-green-600">
            <FaWpforms />
          </span>
          <span className="mx-4 text-sm font-normal">Meal List</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="addBooking"
        >
          <span className="text-left text-green-600">
            <FaWpforms />
          </span>
          <span className="mx-4 text-sm font-normal">Add Booking</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="bookingList"
        >
          <span className="text-left text-green-600">
            <FaWpforms />
          </span>
          <span className="mx-4 text-sm font-normal">Booking List</span>
        </Link>
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="addPayment"
        >
          <span className="text-left text-green-600">
            <FaWpforms />
          </span>
          <span className="mx-4 text-sm font-normal">Add Payment</span>
        </Link> 
        <Link
          className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400 hover:bg-green-200 flex items-center p-2 my-4 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200 justify-start"
          to="paymentList"
        >
          <span className="text-left text-green-600">
            <FaWpforms />
          </span>
          <span className="mx-4 text-sm font-normal">Payment List</span>
        </Link> 
      </nav>
      <button
        onClick={() => RemovedUser()}
        className="hover:text-green-600 font-thin text-gray-500 dark:text-gray-400  flex items-center p-2 my-4 transition-colors dark:hover:text-white duration-200 justify-start  ml-6"
      >
        <span className="text-left text-green-600">
          <CgLogOff />
        </span>
        <span className="mx-4 text-sm font-normal">Log out</span>
      </button>
    </aside>
  );
};

export default SideBar;
