"use client"

import React, { useState } from "react";

const AddUserPage = () => {
  const [isAdmin,setIsAdmin]=useState(false)
  return (
    <div className="bg-bgSoft p-[20px] rounded-lg mt-[20px]">
      <form action="" className="flex flex-wrap justify-between">
        <input
          type="text"
          name="username"
          placeholder="username"
          className="md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          className="md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        >
          <option value="false">Is Admin?</option>
          <option value="true" >Yes</option>
          <option value="false" >No</option>
        </select>
          <select
            name="isAdmin"
            id="isAdmin"
            className="md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          >
            <option value="false">Is Active?</option>
            <option value="true" >Yes</option>
            <option value="false" >No</option>
          </select>

        <textarea
          name="address"
          id="address"
          placeholder="Address"
          className="md:p-[30px] py-2 px-4 h-32 truncate w-full bg-bg text-white border border-[#2e374a] rounded-md mb-[30px] "
        ></textarea>
        <button
          type="submit"
          className="w-full md:p-[30px] py-2 px-4 truncate bg-[teal] text-white border-none rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
