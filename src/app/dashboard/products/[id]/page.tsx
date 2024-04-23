"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import noAvatar from "@/public/noavatar.png";

const DetailUserPage = () => {
  return (
    <div className="flex md:flex-wrap flex-col gap-[50px] mt-[20px]">
      <div className="flex-[1]  p-[20px] flex flex-col items-center bg-bgSoft rounded-lg font-bold text-textSoft h-max">
        <div className="md:w-[300px] md:h-[300px] w-[200px] h-[200px] relative rounded-lg overflow-hidden mb-[20px]">
          <Image src={noAvatar} alt="" className="object-cover" fill />
        </div>
        Marchel Lumimpah
      </div>
      <div className="flex-[3] md:p-[20px] py-3 px-4 bg-bgSoft rounded-lg">
        <form action="" className="flex flex-col">
          <label htmlFor="" className="text-[12px]">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="md:p-[20px] py-3 px-4 border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="Iphone"
          />
          <label htmlFor="" className="text-[12px]">
            Price
          </label>
          <input
            type="number"
            name="price"
            className="md:p-[20px] py-3 px-4 border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="Rp. 9.999.999"
          />
          <label htmlFor="" className="text-[12px]">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            className="md:p-[20px] py-3 px-4 border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="23"
          />
          <label htmlFor="" className="text-[12px]">
            Color
          </label>
          <input
            type="text"
            name="color"
            className="md:p-[20px] py-3 px-4 border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="black"
          />
          <label htmlFor="" className="text-[12px]">
            size
          </label>
          <input
            type="text"
            name="size"
            className="md:p-[20px] py-3 px-4 border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="xx"
          />

          <label htmlFor="" className="text-[12px]">
            Category
          </label>
          <select
            name="cat"
            id="cat"
            className="md:p-[20px] py-3 px-4 border border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label htmlFor="" className="text-[12px]">
            Description
          </label>
          <textarea
            name="desc"
            id="desc"
            className="md:p-[20px] py-3 px-4 border h-28 border-[#2e374a] rounded-md bg-bg text-white my-[10px] mx-[0]"
            placeholder="Description"
          ></textarea>
          {/* button */}
          <button
            type="submit"
            className="w-full md:p-[20px] py-3 px-4 rounded-lg text-white cursor-pointer mt-10 bg-[teal]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailUserPage;
