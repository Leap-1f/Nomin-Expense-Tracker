import { Header } from "../components/Header";

export default function DashboardFunction() {
  return (
    <div className="max-w-screen-xl max-h-screen-xl bg-gray-100 ">
      <Header></Header>
      <div className="max-w-screen-xl m-auto flex flex-row gap-5 ">
        <div className="record-item w-[250px] flex flex-col gap-6 mt-7  bg-white border-gray-100 rounded-xl py-6 px-4">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">Records</h1>

            <button classname=" text-white text-base bg-primary justify-center rounded-[20px] px-3">
              + Add
            </button>
          </div>

          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>

          {/* Type Section */}
          <div className="flex flex-col flex-start gap-4 ">
            <h3 className="text-base font-bold">Types </h3>
            <ul>
              <li className="flex flex-row gap-2">
                <input
                  type="radio"
                  name="radio-9"
                  className="radio size-4"
                  enabled
                />

                <p className="text-sm text-secondary "> All</p>
              </li>
              <li className="flex flex-row gap-2">
                <input
                  type="radio"
                  name="radio-9"
                  className="radio size-4"
                  enabled
                  checked
                />

                <p className="text-sm text-secondary ">Income </p>
              </li>
              <li className="flex flex-row gap-2">
                <input
                  type="radio"
                  name="radio-9"
                  className="radio size-4"
                  enabled
                  checked
                />

                <p className="text-sm text-secondary ">Expense</p>
              </li>
            </ul>
          </div>

          {/* Category Section */}
          <div className="category ">
            <div className="head flex flex-row justify-between ">
              <h1>Category</h1>
              <button className="text-base text-gray-800">Clear</button>
            </div>
            <ul>{/* <li>Category compenent</li> */}</ul>

            <div className="add-button flex flex-row justify-content">
              <div className="flex flex-row gap-1">
                {" "}
                <img src="./plus.svg" alt="" className="+" />
                <button>Add category</button>
              </div>
              <div className="arrow">
                <img src="" alt="" />
              </div>
            </div>
          </div>

          {/* Amount range */}
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-bold">Amount Range</h1>

            <div className=" w-full flex flex-row gap-4  *:h-12 *:rounded-2xl *:bg-gray-100 *:p-4">
              <input type="number" name="" id="" />
              <input type="number" name="" id="" />
            </div>
            <input
              type="range"
              min={0}
              max="100"
              value="25"
              className="range"
              step="25"
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>0</span>

              <span>1000</span>
            </div>
          </div>
        </div>

        <div className="record-list">
          <div className="last30days border-dashed t-[120px] l-[]">
            {" "}
            Last 30 days
            <div className=" "></div>
          </div>

          <div className="filter flex flex-row flex-end  text-base gap-1 ">
            <p>Newest first</p>
            <img src="./arrow_drop_down.svg" alt="" />
          </div>

          <div className="Select-all w-[894px] px-8 py-3 my-5 bg-white rounded-2xl flex flex-row  justify-between">
            <div className="flex flex-row gap-1">
              <input type="checkbox" name="" id="" />
              <p>Select All</p>
            </div>
            <div className="amount"> 50000 T </div>
          </div>
          <div className="today w-[894px] px-8 py-3 bg-white rounded-2xl flex flex-row  justify-between "></div>
          <div className="yesterday"></div>
        </div>
      </div>
    </div>
  );
}
