
import React from "react";
import Sidebar from "../(component)/ui/dashboard/sidebar/sidebar";
import Navbar from "../(component)/ui/dashboard/navbar/navbar";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex w-full bg-bg">
      <div className="flex-[1] bg-bgSoft p-4">
        <Sidebar />
      </div>
      <div className="flex-[4] p-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;