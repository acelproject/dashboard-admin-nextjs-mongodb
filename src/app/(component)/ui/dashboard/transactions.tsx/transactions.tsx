import Image from "next/image";
import React from "react";

// Image
import noAvatar from "@/public/noavatar.png";

const Transactions = () => {
  return (
    <div className="w-full bg-bgSoft p-[20px] rounded-md">
      <h2 className="mb-[20px] text-xl font-normal text-textSoft">
        Latest Transactions
      </h2>
      <div className="w-full overflow-x-scroll md:overflow-visible">
        <table className="w-full">
          <thead>
            <tr>
              <td>Name</td>
              <td>status</td>
              <td>date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody className="">
            <tr>
              <td className="">
                <div className="flex md:flex-row flex-col gap-[10px] items-start md:items-center">
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
              <td>
                <span className="rounded-md p-[5px] text-[14px] text-white bg-[#f7cb7375]">
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
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
                  Pika
                </div>
              </td>
              <td>
                <span className="rounded-md p-[5px] text-[14px] text-white bg-[#afd6ee75]">
                  Done
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
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
                  Andrew
                </div>
              </td>
              <td>
                <span className="rounded-md p-[5px] text-[14px] text-white bg-[#f7737375]">
                  Cencelled
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
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
                  Lisa
                </div>
              </td>
              <td>
                <span className="rounded-md p-[5px] text-[14px] text-white bg-[#f7cb7375]">
                  Pending
                </span>
              </td>
              <td>14.02.2024</td>
              <td>$3.200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
