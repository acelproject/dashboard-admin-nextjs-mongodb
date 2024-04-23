import React from "react";

const AddPage = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-lg mt-[20px]">
      <form action="" className="flex flex-wrap justify-between">
        <input
          type="text"
          name="name"
          placeholder="name"
          className=" md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <select
          name="cat"
          id="cat"
          className=" md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        >
          <option value="kitchen" className=" truncate">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="text"
          placeholder="price"
          name="price"
          className=" md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <input
          type="text"
          placeholder="stock"
          name="stock"
          className=" md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className=" md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className=" md:p-[30px] py-2 px-4 truncate w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <textarea
          name="desc"
          id="desc"
          placeholder="Description"
          className=" md:p-[30px] py-2 px-4 truncate h-32 w-full bg-bg text-white border border-[#2e374a] rounded-md mb-[30px] "
        ></textarea>
        <button
          type="submit"
          className="w-full  md:p-[30px] py-2 px-4 truncate bg-[teal] text-white border-none rounded-md cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddPage;
