import { Header } from "../components/Header";

export default function DashboardFunction() {
  return (
    <div className="max-w-screen-xl max-h-screen-xl bg-gray-100 ">
      <Header></Header>
      <div className="max-w-screen-xl m-auto ">
        <div className="record-item w-[250px] flex flex-col gap-6  bg-white border-gray-100 rounded-xl py-6 px-4">
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
          <div className="flex flex-col flex-start gap-3">
            <h3 className="text-base font-bold">Types </h3>
            <ul>
              <li className="flex flex-row gap-2">
                <input type="radio" name="radio-9" className="radio" disabled />

                <p className="text-sm text-secondary "> All</p>
              </li>
              <li className="flex flex-row gap-2">
                <input
                  type="radio"
                  name="radio-9"
                  className="radio"
                  disabled
                  checked
                />

                <p className="text-sm text-secondary ">Income </p>
              </li>
              <li className="flex flex-row gap-2">
                <input
                  type="radio"
                  name="radio-9"
                  className="radio"
                  disabled
                  checked
                />

                <p className="text-sm text-secondary ">Expense</p>
              </li>
            </ul>
          </div>

          {/* Category Section */}
          <div className="category">
            <div className="head">
              <h1>Category</h1>
              <button>Clear</button>
            </div>

            <ul>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="record-list">
          <div className="date-bar">
            <div className="last30days"> </div>
            <div className="filter"></div>
          </div>

          <div className="today"></div>
          <div className="yesterday"></div>
        </div>
      </div>
    </div>
  );
}
