import React from "react";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-lg flex gap-[20px] cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-y-[20px]">
        <span>Total Users</span>
        <span className="text-[24px] font-medium">9.235</span>
        <span className="text-[14px] font-medium">
          <span className="text-green-500">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
