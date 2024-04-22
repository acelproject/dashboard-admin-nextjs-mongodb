import React from "react";

const AddPage = () => {
  return (
    <div className="bg-bgSoft p-[20px] rounded-lg mt-[20px]">
      <form action="" className="flex flex-wrap justify-between">
        <input
          type="text"
          name="name"
          placeholder="name"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
          required
        />
        <select
          name="cat"
          id="cat"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        >
          <option value="kitchen">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="text"
          placeholder="price"
          name="price"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <input
          type="text"
          placeholder="stock"
          name="stock"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-[30px] w-[45%] bg-bg text-white border border-[#2e374a] rounded-md mb-[30px]"
        />
        <textarea
          name="desc"
          id="desc"
          rows={12}
          placeholder="Description"
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

export default AddPage;
