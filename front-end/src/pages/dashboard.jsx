import { Header } from "../components/Header";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DashboardFunction() {
  return (
    <div className="max-w-screen-xl max-h-screen-xl bg-gray-100 ">
      <Header></Header>

      <div className="max-w-screen-xl mx-[120px] my-6 grid grid-cols-3 gap-5 ">
        {/* blue-card */}
        <div className="card-blue  rounded-[18px]">
          <img
            className="w-[384px] h-[216px]"
            src="./Noise.svg
          "
            alt=""
          />
        </div>
        {/* income card */}
        <div className="income bg-white rounded-[18px] px-4">
          <div className="flex flex-row gap-2  items-center">
            <img className="size-2" src="./round-green.svg" alt="" />
            <h3 className="py-6 px-4 text-base font-bold">Your Income</h3>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="income-amount text-4xl font-bold"> 1'200'000 T</h1>
              <p className="text-lg text-slate-500">Your Income Amount</p>
            </div>

            <div className="flex flex-row gap-4">
              <img src="./arrow-up.svg" alt="" className="rate size-6" />
              <p className="text-lg">32% from last month</p>
            </div>
          </div>
        </div>

        {/* Expenses card */}
        <div className="expense   bg-white rounded-[18px]  px-4">
          <div className="flex flex-row gap-2  items-center">
            <img className="size-2 " src="./round-green.svg" alt="" />
            <h3 className="py-6 px-4 text-base font-bold">Total Expenses</h3>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h1 className="income-amount text-4xl font-bold">
                {" "}
                - 1'200'000 T
              </h1>
              <p className="text-lg text-slate-500">Your Income Amount</p>
            </div>

            <div className="flex flex-row gap-4">
              <img src="./arrow-down.svg" alt="" className="rate size-6" />
              <p className="text-lg">32% from last month</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Data */}
      <div className="chart-data grid grid-cols-2 gap-6">
        <div className="income-graph">
          <h3 className="text-base font-bold py-6 px-4">Income - Expense</h3>
          <div className="py-6 px-8">Chart</div>
        </div>
        <div className="expense-chart"></div>
      </div>

      <div className="last-record">{/* <Doughnut data={} /> */}</div>
    </div>
  );
}
