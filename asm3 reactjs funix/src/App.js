import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import UserGetData from "./components/content/UserContent/UserGetData";
import AboutUser from "./components/content/UserContent/AboutUser";
import User from "./components/content/UserContent/User";
import Department from "./components/content/Department/Department";
import Payroll from "./components/payroll/Payroll";
import SearchUser from "./components/searchUser/SearchUser";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* header */}
        <Header />
        {/* router */}
        <Routes>
          <Route path="/" element={<UserGetData />}></Route>
          <Route path="/staffs/:id" element={<AboutUser />}></Route>
          <Route path="/menu" element={<Department />}></Route>
          <Route path="/payroll" element={<Payroll/>}></Route>
          <Route path="/staffs/search" element={<SearchUser/>}></Route>
        </Routes>
        {/* footer */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
