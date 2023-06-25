import React from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AddRoom from "./AddRoom";
import AddStudent from "./AddStudent";
import DistributionForm from "./DistributionForm";
import StudentList from "./StudentList";
import DashboardHome from "./DashboardHome";
import RoomList from "./RoomList";
import AccountInfo from "./AccountInfo";
import AddHostel from "./AddHostel";

const Dashboard = () => {
  return (
    <>
      <Header />
      <SideBar />
      <main>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="addroom" element={<AddRoom />} />
          <Route path="roomlist" element={<RoomList />} />
          <Route path="addstudent" element={<AddStudent />} />
          <Route path="studentlist" element={<StudentList />} />
          <Route path="distributionform" element={<DistributionForm />} />
          <Route path="accountinformation" element={<AccountInfo />} />
          <Route path="addHostel" element={<AddHostel />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
