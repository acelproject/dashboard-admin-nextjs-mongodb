"use client";

import { usePathname } from "next/navigation";
import React from "react";
import {
  MdMenu,
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import RightBarMobile from "../rightbar/rightbarMobile";

const Navbar = ({ setCloseSidebar,closeSidebar }: { setCloseSidebar: any,closeSidebar:boolean }) => {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-40">
      <div className="w-full flex  md:flex-row flex-col md:gap-y-0 gap-y-4 items-start  md:items-center justify-between bg-bgSoft rounded-md py-4 px-5">
        <div className="capitalize text-xl font-medium order-1 flex items-center gap-x-4">
          <MdMenu onClick={()=>setCloseSidebar(!closeSidebar)} />
          {pathname
            .split("/")
            .pop()
            ?.split("-")
            .join(" ")
            .split("%20")
            .join(" ")}
        </div>
        <div className="flex order-2 items-center gap-x-5 justify-end">
          <div className="flex items-center gap-x-3 bg-[#2e374a] p-[10px] rounded-lg w-full md:w-7/12">
            <MdSearch />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent text-textSoft w-[80%]"
            />
          </div>

          <div className="flex items-center gap-4">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
      <div className="md:hidden flex absolute right-0 top-0 pt-4 pr-4">
        <RightBarMobile />
      </div>
    </div>
  );
};

export default Navbar;
