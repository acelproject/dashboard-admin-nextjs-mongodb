import Search from "@/app/(component)/ui/dashboard/search/search";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Pagination from "../pagination/pagination";
import noAvatar from "@/public/noavatar.png";

const User = () => {
  return (
    <div className="my-5 bg-bgSoft p-[20px] rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href={`/dashboard/users/add-user`}>
          <button className="p-[10px] bg-[#5d57c9] text-white border-none rounded-md cursor-pointer">
            Add new
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th  className="text-start ps-2">Name</th>
            <th  className="text-start ps-2">Email</th>
            <th  className="text-start ps-2">Created At</th>
            <th  className="text-start ps-2">Role</th>
            <th  className="text-start ps-2">Status</th>
            <th  className="text-start ps-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex items-center gap-[10px]">
                <Image
                  src={noAvatar}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Marchel Lumimpah
              </div>
            </td>
            <td>acl11@gmail.com</td>
            <td>13.01.2023</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className="flex gap-[10px] ">
                <Link href={`/dashboard/users/test`}>
                  <button className="py-[5px] px-[10px] bg-[teal] text-white border-none rounded-md cursor-pointer">
                    View
                  </button>
                </Link>
                <button className="py-[5px] px-[10px] bg-[crimson] text-white border-none rounded-md cursor-pointer">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div>
      <Pagination/>
      </div>
    </div>
  );
};

export default User;
