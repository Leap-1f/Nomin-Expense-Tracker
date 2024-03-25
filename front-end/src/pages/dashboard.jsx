import { BarChart } from "@/components/Barchart";
import { HeaderBar } from "../components/Header";

import { barChartData } from "../components/test/data.js";

import { useState } from "react";
import { DoughnutChart } from "@/components/Piechart";

export default function DashboardFunction() {
  const [chartData, setChartData] = useState({
    labels: barChartData.map((data) => data.month),
    datasets: [
      {
        label: "Income",
        data: barChartData.map((data) => data.income),
        backgroundColor: "#84CC16",
        borderRadius: [10],
      },
      {
        label: "Expense",
        data: barChartData.map((data) => data.expense),
        backgroundColor: "#F97316",
        borderRadius: [10],
      },
    ],
  });

  const [pieChartData, setPieChartData] = useState({
    labels: ["Bills", " Food", "Shopping", "Insurance", "Clothing"],
    datasets: [
      {
        label: "Poll",
        data: [2000000, 1800000, 1200000, 500000, 500000],
        backgroundColor: [
          "#E74694",
          "#1C64F2",
          "#F2901C",
          "#16BDCA",
          "#FDBA8C",
        ],
      },
    ],
  });

  return (
    <div className="max-w-screen mx-auto bg-gray-100 ">
      <HeaderBar></HeaderBar>

      <div className="max-w-screen-xl m-auto  px-[120px] my-6 grid grid-cols-3 gap-5 ">
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
              <div className=" income-amount text-4xl font-bold  flex flex-row gap-1">
                <h1 className=" "> - 1'200'000</h1>
                <p>₮</p>
              </div>
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
              <div className=" income-amount text-4xl font-bold  flex flex-row gap-1">
                <h1 className=" "> - 1'200'000</h1>
                <p>₮</p>
              </div>

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
      <div className="chart-data max-w-screen-xl m-auto   grid grid-cols-2 gap-6">
        <div className="income-graph bg-white rounded-lg ">
          <h3 className="text-base font-bold py-3 px-4">Income - Expense</h3>
          <div className="py-3 px-8">
            <BarChart chartDataTest={chartData} />
          </div>
        </div>
        <div className="expense-chart  bg-white rounded-lg  ">
          <div className="flex flex-row justify-between">
            <h3 className="text-base font-bold py-3 px-4">Income - Expense</h3>
            <p className="text-base font-bold py-3 px-4 text-gray-500">
              Jun 1 - Nov 30
            </p>
          </div>
          <div className="flex flex-row gap-[47px]">
            <div className="size-fit">
              <DoughnutChart pieData={pieChartData} />
            </div>

            <div></div>
          </div>
        </div>
      </div>

      {/* Last Record */}
      <div className="last-record max-w-screen-xl m-auto mt-5 rounded-md px-6 py-6 bg-white">
        <div className="today flex flex-col gap-1">
          <h1 className="text-lg font-bold">Last Records</h1>
          <div className="divider"></div>
          <ul className="flex flex-col gap-1">
            <li className="today px-8 py-2 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
              <div className="flex flex-row gap-3 items-center">
                <input className="size-6 " type="checkbox" name="" id="" />

                <div className="rounded-full size-10 bg-primary flex justify-center items-center">
                  <img src="./House.svg" alt="" />
                </div>

                <div>
                  <p className="text-base ">Lending & Renting</p>
                  <p className="text-sm  text-gray-500">3 hours ago</p>
                </div>
              </div>
              <div className=" flex flex-row flex-end gap-1 text-base text-green-400">
                <p> ₮</p>
                <div className="amount "> 35000 </div>
              </div>
            </li>
            <div className="divider"></div>

            <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
              <div className="flex flex-row gap-3 items-center">
                <input className="size-6 " type="checkbox" name="" id="" />

                <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                  <img src="./food.svg" alt="" />
                </div>

                <div>
                  <p className="text-base ">Food & Drinks</p>
                  <p className="text-sm  text-gray-500">3 hours ago</p>
                </div>
              </div>
              <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                <p> ₮</p>
                <div className="amount "> 25000 </div>
              </div>
            </li>

            <div className="divider"></div>
            <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
              <div className="flex flex-row gap-3 items-center">
                <input className="size-6 " type="checkbox" name="" id="" />

                <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                  <img src="./food.svg" alt="" />
                </div>

                <div>
                  <p className="text-base ">Food & Drinks</p>
                  <p className="text-sm  text-gray-500">3 hours ago</p>
                </div>
              </div>
              <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                <p> ₮</p>
                <div className="amount "> 25000 </div>
              </div>
            </li>
            <div className="divider"></div>
            <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
              <div className="flex flex-row gap-3 items-center">
                <input className="size-6 " type="checkbox" name="" id="" />

                <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                  <img src="./food.svg" alt="" />
                </div>

                <div>
                  <p className="text-base ">Food & Drinks</p>
                  <p className="text-sm  text-gray-500">3 hours ago</p>
                </div>
              </div>
              <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                <p> ₮</p>
                <div className="amount "> 25000 </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
