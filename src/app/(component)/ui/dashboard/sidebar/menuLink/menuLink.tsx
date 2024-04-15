"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ item }: any) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex items-center gap-x-2 hover:bg-[#2e374a] rounded-md px-5 py-4 ${
        pathname === item.path && "bg-[#2e374a]"
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};

export default MenuLink;
