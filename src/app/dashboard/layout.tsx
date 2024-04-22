"use client";
import React, { useState } from "react";
import Sidebar from "../(component)/ui/dashboard/sidebar/sidebar";
import Navbar from "../(component)/ui/dashboard/navbar/navbar";
import Footer from "../(component)/ui/dashboard/footer/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [closeSidebar, setCloseSidebar] = useState(false);
  return (
    <div className="flex w-full bg-bg">
      <div
        className={`h-[100vh]  no-scrollbar overflow-scroll transition-all fixed z-50 md:bg-bgSoft bg-slate-900 my-0 p-4 md:p-4 ${closeSidebar? "translate-x-[0px] md:translate-x-[-300px]":"translate-x-[-300px] md:translate-x-[0px]"}   w-[80%]  md:w-[20%]`}
      >
        {/* {closeSidebar ? null : (
        )} */}
        <Sidebar
          closeSidebar={closeSidebar}
          setCloseSidebar={setCloseSidebar}
        />
        
      </div>
      <div className={` p-4 transition-all ${closeSidebar?"md:w-[100%]":"w-[100%] md:w-[80%] "}  right-0 absolute`}>
        <Navbar setCloseSidebar={setCloseSidebar} closeSidebar={closeSidebar} />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
