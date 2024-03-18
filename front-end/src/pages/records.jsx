import { HeaderBar } from "../components/Header";
import { useState } from "react";

export default function DashboardFunction() {
  const [openModal, setOpenModal] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [toggle, setToggle] = useState("expense");

  const handleOpanModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleToggle = () => {
    setToggle("income");
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto  bg-gray-100 ">
        <HeaderBar></HeaderBar>
        <div className="max-w-screen px-[120px]  my-0 py-4 flex flex-row gap-8  justify-center  ">
          <div className="record-item w-[250px] flex flex-col gap-6 mt-7  bg-white border-gray-100 rounded-xl py-6 px-4">
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-bold">Records</h1>

              <button
                onClick={() => {
                  handleOpanModal();
                }}
                className=" text-white text-base bg-primary justify-center rounded-[20px] px-3"
              >
                + Add
              </button>
            </div>

            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow text-base"
                placeholder="Search"
              />
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
              <ul className=" flex flex-col gap-4">
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
            <div className="category  flex flex-col gap-4">
              <div className="head flex flex-row justify-between ">
                <h3 className="text-base font-bold">Category</h3>
                <button className="text-base text-gray-300">Clear</button>
              </div>
              <ul className="flex flex-col gap-4 justify-between">
                <li className=" flex flex-row  justify-between">
                  <div className=" flex flex-row gap-2">
                    <div className="size-5 bg-red-600 rounded-full flex justify-center items-center ">
                      <img src="./food.svg" alt="" />
                    </div>

                    <p className=" text-base text-secondary ">Food & Drinks</p>
                  </div>
                  <button className="flex justify-center items-center">
                    <img src="/leading-icon.svg" alt="" />
                  </button>
                </li>
                <li className=" flex flex-row  justify-between">
                  <div className=" flex flex-row gap-2">
                    <div className="size-5 bg-primary rounded-full flex justify-center items-center ">
                      <img src="./house.svg" alt="" />
                    </div>

                    <p className=" text-base text-secondary ">
                      Lending & Renting
                    </p>
                  </div>
                  <button className="flex justify-center items-center">
                    <img src="/leading-icon.svg" alt="" />
                  </button>
                </li>
                <li className=" flex flex-row  justify-between">
                  <div className=" flex flex-row gap-2">
                    <div className="size-5 bg-primary rounded-full flex justify-center items-center ">
                      <img src="./house.svg" alt="" />
                    </div>

                    <p className=" text-base text-secondary ">
                      Lending & Renting
                    </p>
                  </div>
                  <button className="flex justify-center items-center">
                    <img src="/leading-icon.svg" alt="" />
                  </button>
                </li>
              </ul>

              <div className="add-button flex flex-row justify-between ">
                <button className="flex flex-row gap-1 ">
                  <img src="./plus.svg" alt="" className="+" />
                  <p>Add category</p>
                </button>

                <div className="arrow  justify-center items-center">
                  <img src="./leading-icon.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Amount range */}
            <div className="flex flex-col gap-4">
              <h3 className="text-base font-bold">Amount Range</h3>

              <div className="grid grid-cols-2 gap-4  *:h-12 *:rounded-2xl *:bg-gray-100 *:p-4">
                <input type="number" name="" id="" placeholder="0" />
                <input type="number" name="" id="" placeholder="1000" />
              </div>
              <input
                type="range"
                min={0}
                max="100"
                value="25"
                className="range-sky-500"
                step="25"
              />
              <div className=" flex justify-between text-xs px-2">
                <span>0</span>

                <span>1000</span>
              </div>
            </div>
          </div>

          <div className="record-list">
            <div className="flex flex-row justify-around mt-4">
              <div className="last30days border-dashed t-[120px] l-[]">
                {" "}
                Last 30 days
                <div className=" "></div>
              </div>

              <div className="filter flex flex-row flex-end  text-base gap-1 ">
                <p>Newest first</p>
                <img src="./arrow_drop_down.svg" alt="" />
              </div>
            </div>
            <div className="w-[894px] mt-4 ">
              <div className="Select-all w-full px-8 py-3 my-5 bg-white rounded-2xl flex flex-row  justify-between">
                <div className="flex flex-row gap-1">
                  <input type="checkbox" name="" id="" />
                  <p>Select All</p>
                </div>
                <div className=" flex flex-row flex-end gap-1 text-base text-gray-400">
                  <p> ₮</p>
                  <div className="amount "> 50000 </div>
                </div>
              </div>
              {/* today section */}
              <div className="today flex flex-col gap-4">
                <h1 className="text-lg font-bold">Today</h1>

                <ul className="flex flex-col gap-3">
                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-primary flex justify-center items-center">
                        <img src="./House.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Lending & Renting</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-green-400">
                      <p> ₮</p>
                      <div className="amount "> 35000 </div>
                    </div>
                  </li>

                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                        <img src="./food.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Food & Drinks</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                      <p> ₮</p>
                      <div className="amount "> 25000 </div>
                    </div>
                  </li>

                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                        <img src="./food.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Food & Drinks</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                      <p> ₮</p>
                      <div className="amount "> 25000 </div>
                    </div>
                  </li>
                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                        <img src="./food.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Food & Drinks</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                      <p> ₮</p>
                      <div className="amount "> 25000 </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Yesterday section */}
              <div className="today flex flex-col gap-4 mt-4">
                <h1 className="text-lg font-bold">Yesterday</h1>

                <ul className="flex flex-col gap-3">
                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-primary flex justify-center items-center">
                        <img src="./House.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Lending & Renting</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-green-400">
                      <p> ₮</p>
                      <div className="amount "> 35000 </div>
                    </div>
                  </li>

                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                        <img src="./food.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Food & Drinks</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                      <p> ₮</p>
                      <div className="amount "> 25000 </div>
                    </div>
                  </li>

                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                        <img src="./food.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Food & Drinks</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                      <p> ₮</p>
                      <div className="amount "> 25000 </div>
                    </div>
                  </li>
                  <li className="today px-8 py-3 bg-white rounded-xl  border-gray-200 flex flex-row  justify-between ">
                    <div className="flex flex-row gap-3 items-center">
                      <input
                        className="size-6 "
                        type="checkbox"
                        name=""
                        id=""
                      />

                      <div className="rounded-full size-10 bg-red-600 flex justify-center items-center">
                        <img src="./food.svg" alt="" />
                      </div>

                      <div>
                        <p className="text-base ">Food & Drinks</p>
                        <p className="text-sm  text-gray-500">14:00</p>
                      </div>
                    </div>
                    <div className=" flex flex-row flex-end gap-1 text-base text-yellow-400">
                      <p> ₮</p>
                      <div className="amount "> 25000 </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="yesterday"></div>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div>
          <div className="fixed inset-0 z-[2] bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <div className=" w-[792px] h-[512px] rounded-xl  bg-white flex flex-col ">
              <div className="flex flex-row justify-between px-6 py-5">
                <h1 className="text-lg font-bold">Add Record</h1>
                <button onClick={handleCloseModal}>
                  <img src="./X.svg" alt="" />
                </button>
              </div>
              <div className="divider"></div>
              <div className="grid grid-cols-2">
                {/* Column-1 */}
                <div className=" w-full flex  flex-col px-6 pt-4  pb-6 gap-5">
                  <div className="buttons  flex flex-row ">
                    <div className=" w-[300px] justify-center px-4 text-base absolute rounded-3xl  bg-gray-200 "></div>
                    <button
                      onClick={handleToggle}
                      name="expense"
                      className="text-black px-4 text-base w-[50%] z-10  relative rounded-3xl bg-gray-200 hover:bg-primary hover:text-white"
                    >
                      Expense
                    </button>

                    <button
                      onClick={handleToggle}
                      name="income"
                      className="text-white px-4 text-base w-[50%] z-10 relative rounded-3xl bg-gray-200 hover:bg-green-400 hover:text-white "
                    >
                      Income
                    </button>
                  </div>
                  <div className="Inputs border-solid border-gray-600 flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                      <p> Amount</p>
                      <div>
                        {/* <p>₮</p> */}
                        <input type="number" placeholder="₮ 000.00" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <p>Category</p>
                      <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>
                          Find or choose category
                        </option>
                        <option>1</option>
                        <option>2</option>
                      </select>
                    </div>
                    <div className="date grid grid-cols-2 gap-1">
                      <div className="flex flex-col gap-1">
                        <p>Date</p>

                        {/* <DatePicker
                          className="select select-bordered w-fit max-w-xs"
                          selected={date}
                          onChange={(date) => setDate(date)}
                        ></DatePicker> */}

                        <input
                          className="select select-bordered w-fit max-w-xs"
                          type="date"
                          name=""
                          id=""
                          onChange={(date) => setDate(date)}
                          min="2024-01-01"
                          max="2024-12-31"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p>Time</p>
                        <input
                          className="select select-bordered w-fit max-w-xs"
                          onChange={(time) => setTime(time)}
                          type="time"
                          name=""
                          id=""
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseModal}
                    className="text-white text-base rounded-3xl bg-primary"
                  >
                    Add Record
                  </button>
                </div>

                {/* Column-2 */}
                <div className="flex flex-col gap-8 pt-11 pb-6 px-6">
                  <div>
                    <p>Payee</p>
                    <select className="select select-bordered w-full max-w-xs">
                      <option disabled selected>
                        Write here
                      </option>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>

                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">Note</span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-52"
                      placeholder="Write here"
                    ></textarea>
                    <div className="label"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
