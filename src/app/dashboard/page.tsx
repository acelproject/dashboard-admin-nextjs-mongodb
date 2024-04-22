import React from "react";
import Card from "../(component)/ui/dashboard/card/card";
import Transactions from "../(component)/ui/dashboard/transactions.tsx/transactions";
import Chart from "../(component)/ui/dashboard/chart/chart";
import RightBar from "../(component)/ui/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className="w-full flex gap-x-[20px] mt-4">
      <div className="w-[100%] md:w-[75%] flex flex-col gap-y-[20px]">
        <div className="flex flex-col md:flex-row gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className="w-[25%] md:flex hidden">
        <RightBar/>
      </div>
    </div>
  );
};

export default Dashboard;
