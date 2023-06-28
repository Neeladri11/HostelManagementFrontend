import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
//import Footer from "../components/Footer";
import AddRoom from "./AddRoom";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
import DashboardHome from "./DashboardHome";
import RoomList from "./RoomList";
import AccountInfo from "./AccountInfo";
import AddHostel from "./AddHostel";
import AddMeal from "./AddMeal";
import AddBooking from "./AddBooking";
import AddPayment from "./AddPayment";
import HostelList from "./HostelList";
import MealList from "./MealList";
import BookingList from "./BookingList";
import PaymentList from "./PaymentList";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="addHostel" element={<AddHostel />} />
          <Route path="hostelList" element={<HostelList />} />
          <Route path="addroom" element={<AddRoom />} />
          <Route path="roomlist" element={<RoomList />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="studentlist" element={<StudentList />} />
          <Route path="addHostel" element={<AddHostel />} />
          <Route path="addMeal" element={<AddMeal />} />
          <Route path="mealList" element={<MealList />} />
          <Route path="addBooking" element={<AddBooking />} />
          <Route path="bookingList" element={<BookingList />} />
          <Route path="addPayment" element={<AddPayment />} />
          <Route path="paymentList" element={<PaymentList />} />
          <Route path="accountinformation" element={<AccountInfo />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
