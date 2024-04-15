import React from "react";
import Card from "../(component)/ui/dashboard/card/card";
import Transactions from "../(component)/ui/dashboard/transactions.tsx/transactions";
import Chart from "../(component)/ui/dashboard/chart/chart";
import RightBar from "../(component)/ui/dashboard/rightbar/rightbar";

const Dashboard = () => {
  return (
    <div className="flex gap-x-[20px] mt-4">
      <div className="flex-[3] flex flex-col gap-y-[20px]">
        <div className="flex gap-[20px] justify-between">
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className="flex-[1]">
        <RightBar/>
      </div>
    </div>
  );
};

export default Dashboard;
