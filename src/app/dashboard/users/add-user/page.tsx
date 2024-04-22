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
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="phone"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <select
          name="isAdmin"
          id="isAdmin"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        >
          <option value="false">Is Admin?</option>
          <option value="true" >Yes</option>
          <option value="false" >No</option>
        </select>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          >
            <option value="false">Is Active?</option>
            <option value="true" >Yes</option>
            <option value="false" >No</option>
          </select>

        <textarea
          name="address"
          id="address"
          rows={12}
          placeholder="Address"
          className="p-[30px] w-full bg-bg text-white border border-[#2e374a] rounded-md mb-[30px] "
        ></textarea>
        <button
          type="submit"
          className="w-full p-[30px] bg-[teal] text-white border-none rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUserPage;
