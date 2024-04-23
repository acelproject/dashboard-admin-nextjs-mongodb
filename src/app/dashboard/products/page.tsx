import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import noAvatar from "@/public/noproduct.jpg";
import Pagination from '@/app/dashboard/pagination/pagination';
import Search from '@/app/(component)/ui/dashboard/search/search';

const Products = () => {
  return (
    <div className="w-full my-5 bg-bgSoft p-[20px] rounded-lg">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href={`/dashboard/products/add-product`}>
          <button className="p-[10px] bg-[#5d57c9] text-white border-none rounded-md cursor-pointer">
            Add new
          </button>
        </Link>
      </div>
      <div className='w-full overflow-x-scroll md:overflow-visible'>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th  className="text-start ps-2">Title</th>
            <th  className="text-start ps-2">Description</th>
            <th  className="text-start ps-2">Price</th>
            <th  className="text-start ps-2">Created At</th>
            <th  className="text-start ps-2">Stock</th>
            <th  className="text-start ps-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="flex md:flex-row flex-col gap-[10px] items-start md:items-center">
                <Image
                  src={noAvatar}
                  alt=""
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                Iphone 12
              </div>
            </td>
            <td>Desc</td>
            <td>Rp. 12.000.000</td>
            <td>13.01.2023</td>
            <td>9</td>
            <td>
              <div className="flex gap-[10px] ">
                <Link href={`/dashboard/products/iphone 12`}>
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
      </div>
      <div>
      <Pagination/>
      </div>
    </div>
  )
}

export default Products