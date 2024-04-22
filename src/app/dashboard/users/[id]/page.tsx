"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import noAvatar from "@/public/noavatar.png";

const DetailUserPage = () => {

  return (
    <div className="flex gap-[50px] mt-[20px]">
      <div className="flex-[1]  p-[20px] flex flex-col items-center bg-bgSoft rounded-lg font-bold text-textSoft h-max">
        <div className="w-[300px] h-[300px] relative rounded-lg overflow-hidden mb-[20px]">
          <Image src={noAvatar} alt="" className="object-cover" fill />
        </div>
        Marchel Lumimpah
      </div>
      <div className="flex-[3] p-[20px] bg-bgSoft rounded-lg">
        <form action="" className="flex flex-col">
          <label htmlFor="" className="text-[12px]">Username</label>
          <input
            type="text"
            name="username"
            className="p-[20px] border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="Marchel Lumimpah"
          />
          <label htmlFor="" className="text-[12px]">Email</label>
          <input
            type="email"
            name="email"
            className="p-[20px] border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="aclprc@gmail.com"
          />
          <label htmlFor="" className="text-[12px]">Password</label>
          <input
            type="password"
            name="password"
            className="p-[20px] border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="Password"
          />
          <label htmlFor="" className="text-[12px]">Phone</label>
          <input
            type="text"
            name="phone"
            className="p-[20px] border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="082238477433"
          />
          <label htmlFor="" className="text-[12px]">Address</label>
          <textarea
            name="address"
            id=""
            className="p-[20px] border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="Matako"
          ></textarea>
          <label htmlFor="" className="text-[12px]">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-[20px] border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <label htmlFor="" className="text-[12px]">Is Active?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-[20px] border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          {/* button */}
          <button type="submit" className="w-full p-[20px] rounded-lg text-white cursor-pointer mt-10 bg-[teal]">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DetailUserPage;
