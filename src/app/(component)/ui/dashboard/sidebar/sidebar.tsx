import React from "react";
import {
  MdAttachMoney,
  MdDashboard,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdClose,
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Produtcs",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/reports",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

// image
import noAvatar from "@/public/noavatar.png";

const Sidebar = ({ closeSidebar,setCloseSidebar,}: { closeSidebar: boolean,setCloseSidebar:any}) => {
  return (
    <div className={` md:flex flex-col gap-y-5 `}>
      <div className="flex justify-between mb-5 md:mb-0">
        <div className="flex gap-x-4 items-center">
          <Image
            src={noAvatar}
            alt=""
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div className="flex flex-col leading-5">
            <span>Marchel</span>
            <span className="text-textSoft">Administrator</span>
          </div>
        </div>
        <div className="md:hidden flex">
          <MdClose onClick={()=>setCloseSidebar(!closeSidebar)}/>
        </div>
      </div>
      <ul className="flex flex-col gap-y-4">
        {menuItems.map((item, i) => (
          <li key={i} className="flex flex-col">
            <span className="text-textSoft font-bold text-[13px] my-0 mb-3">
              {item.title}
            </span>
            <div className="flex flex-col gap-y-1">
              {item.list.map((listItem, i) => (
                <MenuLink item={listItem} key={i} />
              ))}
            </div>
          </li>
        ))}
        <button className="flex items-center gap-x-2 hover:bg-[#2e374a] rounded-md px-5 py-4 cursor-pointer">
          <MdLogout />
          Logout
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
