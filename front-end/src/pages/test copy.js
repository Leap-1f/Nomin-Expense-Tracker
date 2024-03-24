import { Header } from "../components/Header";
import { BsPlusLg } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Categories } from "../components/icons/Category";
import CategoryIcons from "../components/icons/CategoryIcons";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { LastRecord } from "../components/icons/Category";
import { GoHomeFill } from "react-icons/go";
export default function Home() {
  const [isRecordOpen, setIsRecordOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [recordType, setRecordType] = useState("Expense");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [selectedIconId, setSelectedIconId] = useState(null);
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:3001/category", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const newData = await response.json();
      setCategories(newData);
      console.log(newData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleAddCategory = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/category/categories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: categoryName,
            category_img_id: selectedIconId,
          }),
        }
      );
      const newData = await response.json();
      console.log(newData);
      fetchCategories();
      setCategoryName("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleIconClick = (item) => {
    setSelectedIcon(item.icon);
    setSelectedIconId(item.id);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
  };
  const openRecord = () => {
    setIsRecordOpen(true);
  };
  const closeRecord = () => {
    setSelectedCategory("");
    setIsRecordOpen(false);
  };
  const openCategory = () => {
    setIsCategoryOpen(true);
  };
  const closeCategory = () => {
    setSelectedIcon("");
    setIsCategoryOpen(false);
  };
  const handleRecordTypeChange = (type) => {
    setRecordType(type);
  };
  return (
    <>
      <div className="w-screen h-screen">
        <Header />
        <div className="flex justify-center h-[92%] w-full bg-gray-100">
          <div className=" flex justify-center container h-full w-full gap-[3%]">
            <div className="flex flex-col w-[25%] p-[20px] gap-[20px] bg-white rounded-2xl mt-[30px]">
              <div className="flex flex-col gap-[10px]">
                <div className=" font-semibold text-[25px] ">Records</div>
                <div className=" flex justify-center">
                  <button
                    onClick={() => openRecord()}
                    className="btn bg-blue-500 text-white hover:bg-blue-500 hover:shadow-lg w-[80%] rounded-3xl text-[17px] font-normal"
                  >
                    <BsPlusLg />
                    Add
                  </button>
                </div>
              </div>
              <div className="">
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type="text"
                    className="grow border-none"
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
              </div>
              <div className="">
                <div className="flex flex-col gap-[20px] w-1/2">
                  <div className=" font-semibold">Types</div>
                  <div className="ml-[10px]">
                    <div className="flex gap-[15px]">
                      <div className=" flex justify-center items-center">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-[17px] h-[17px]"
                        />
                      </div>
                      <div>All</div>
                    </div>
                    <div className="flex gap-[15px]">
                      <div className=" flex justify-center items-center">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-[17px] h-[17px]"
                        />
                      </div>
                      <div>Income</div>
                    </div>
                    <div className="flex gap-[15px]">
                      <div className=" flex justify-center items-center">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-[17px] h-[17px]"
                        />
                      </div>
                      <div>Expense</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between">
                  <div className=" font-semibold">Category</div>
                  <div className=" text-gray-400 cursor-pointer">Clear</div>
                </div>
                <div className="flex flex-col gap-[10px] ">
                  <div className="flex flex-col gap-[10px] mt-[10px]">
                    {categories.map((category, index) => (
                      <div
                        className="flex justify-between ml-[10px]"
                        key={index}
                      >
                        <div className="flex justify-center items-center gap-[10px]">
                          <div className=" flex justify-center items-center w-[20px] h-[20px] fill-slate-400">
                            {
                              CategoryIcons.find(
                                (iconObj) =>
                                  iconObj.id ===
                                  parseInt(category.category_img, 10)
                              )?.icon
                            }
                          </div>

                          {category.name}
                        </div>
                        <div className="flex justify-center items-center">
                          <BiSolidRightArrow className="w-[12px] h-[12px]" />
                        </div>
                      </div>
                    ))}
                    <div
                      className="flex ml-[10px] cursor-pointer w-fit gap-[10px]"
                      onClick={() => openCategory()}
                    >
                      <div className="flex justify-center items-center">
                        <FaPlus className="fill-blue-500" />
                      </div>
                      <div>Add Category</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className=" font-semibold">Amount Range</div>
                <div className="flex gap-[30px] mt-[20px]">
                  <div>
                    <input
                      type="text"
                      placeholder="0"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="1000"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="">
                  <input type="range" className="w-full" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[73%] mt-[30px] gap-[20px]">
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <div className="flex gap-[10px] ml-[100px]">
                    <div className=" flex justify-center items-center cursor-pointer">
                      <RiArrowLeftSLine className="w-[20px] h-[20px]" />
                    </div>
                    <div className="flex items-center">Last 30 Days</div>
                    <div className=" flex justify-center items-center cursor-pointer">
                      <RiArrowRightSLine className="w-[20px] h-[20px]" />
                    </div>
                  </div>
                  <div className="">
                    <select className="select w-full max-w-xs bg-white">
                      <option selected>Newest First</option>
                      <option>Oldest First</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between w-full bg-white rounded-lg py-[15px] px-[10px]">
                <div className="flex gap-[10px]">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      Checked
                      className="checkbox checkbox-md"
                    />
                  </div>
                  <div className="flex items-center">Select All</div>
                </div>
                <div className=" text-gray-400 mr-[20px]">- 35,500 &#8366;</div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className=" font-semibold text-[20px]">Today</div>
                {LastRecord.map((category, index) => (
                  <div
                    key={index}
                    className="flex justify-between w-full bg-white rounded-lg py-[15px] px-[10px] hover:shadow-lg"
                  >
                    <div className="flex gap-[10px]">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          Checked
                          className="checkbox checkbox-md"
                        />
                      </div>
                      <div className="flex flex-col">
                        <div>{category.h1}</div>
                        <div className="text-[13px] text-gray-400">
                          {category.p}
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center mr-[20px] text-green-400">
                      {category.num}
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold text-[20px]">Yesterday</div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isRecordOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg w-[40%] h-[50%]">
            <div className=" flex justify-between items-center border-b-[2px] h-[13%] ml-[20px] mr-[20px]">
              <div className=" font-bold text-[25px]">Add Record</div>
              <div onClick={closeRecord}>
                <label className="btn btn-circle bg-white">
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="flex w-full h-[87%]">
              <div className="flex flex-col gap-[30px] w-[50%] h-full p-[20px]">
                <div className="flex justify-between  *:text-center h-[10%] bg-gray-200 rounded-3xl *:cursor-pointer">
                  <div
                    className={`flex justify-center items-center w-1/2 h-full rounded-3xl ${
                      recordType === "Expense"
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleRecordTypeChange("Expense")}
                  >
                    Expense
                  </div>
                  <div
                    className={`flex justify-center items-center w-1/2 h-full rounded-3xl ${
                      recordType === "Income"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-black"
                    }`}
                    onClick={() => handleRecordTypeChange("Income")}
                  >
                    Income
                  </div>
                </div>
                <div className="flex flex-col gap-[15px]">
                  <div className="w-full">
                    <div className="">Amount</div>
                    <input
                      placeholder="&#8366; 000.0"
                      className="input input-bordered w-full bg-gray-100"
                    />
                  </div>
                  <div>
                    <div>Category</div>
                    <div className=" w-full">
                      <div className="dropdown dropdown-bottom w-full">
                        <div
                          tabIndex={0}
                          className=" flex items-center input input-bordered w-full bg-gray-100"
                        >
                          {selectedCategory ? (
                            <div>{selectedCategory}</div>
                          ) : (
                            <div>Choose Category</div>
                          )}
                        </div>
                        <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit h-fit">
                          <div className="flex flex-col">
                            {categories.map((item, index) => (
                              <button
                                key={index}
                                onClick={() => handleCategoryClick(item)}
                                className="flex gap-[10px] hover:bg-gray-200 p-2"
                              >
                                {
                                  CategoryIcons.find(
                                    (iconObj) =>
                                      iconObj.id ===
                                      parseInt(item.category_img, 10)
                                  )?.icon
                                }
                                {item.name}
                              </button>
                            ))}
                          </div>
                          <div className="w-full border-solid border-[1px] border-gray-300 mt-[15px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-[20px]">
                    <form className="flex flex-col">
                      <label
                        htmlFor="transactionDate"
                        className="text-gray-700"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        id="transactionDate"
                        name="date"
                        className="input input-bordered bg-gray-50"
                      />
                    </form>
                    <form className="flex flex-col">
                      <label
                        htmlFor="transactionTime"
                        className="text-gray-700"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        id="transactionTime"
                        name="time"
                        className="input input-bordered bg-gray-50"
                      />
                    </form>
                  </div>
                  <div className="w-full mt-[20px]">
                    <button
                      className={`btn w-full text-white ${
                        recordType === "Expense"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "bg-green-500 hover:bg-green-400"
                      }`}
                    >
                      Add Record
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] w-[50%] h-full p-[20px]">
                <div>
                  <div>Payee</div>
                  <div className="mt-[15px]">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input input-bordered w-full bg-gray-100"
                    />
                  </div>
                </div>
                <div className="h-full">
                  <div>Note</div>
                  <div className="h-[80%] w-full mt-[15px]">
                    <textarea
                      placeholder="Write here"
                      className="textarea textarea-bordered h-full w-full bg-gray-100 "
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isCategoryOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md shadow-lg w-[22%] h-[20%]">
            <div className=" flex justify-between items-center border-b-[2px] h-[23%] ml-[20px] mr-[20px]">
              <div className=" font-light text-[23px]">Add Category</div>
              <div onClick={closeCategory}>
                <label className="btn btn-circle bg-white">
                  <svg
                    className="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="flex flex-col w-full h-[77%]">
              <div className="flex justify-center gap-[30px] p-[10px]">
                <div>
                  <div className="dropdown dropdown-bottom">
                    <div tabIndex={0} className="btn">
                      {selectedIcon ? (
                        <div>{selectedIcon}</div>
                      ) : (
                        <div>
                          <GoHomeFill className="w-[20px] h-[20px]" />
                        </div>
                      )}
                    </div>
                    <div className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[300px] h-[250px]">
                      <div className="grid grid-cols-6 gap-4 ">
                        {CategoryIcons.map((item, index) => (
                          <button
                            key={index}
                            onClick={() => handleIconClick(item)}
                          >
                            <div className="">{item.icon}</div>
                          </button>
                        ))}
                      </div>
                      <div className=" w-full border-solid border-[1px] border-gray-300 mt-[15px]"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-[20px]">
                <button
                  className="btn btn-wide bg-green-400 text-white hover:bg-green-500"
                  onClick={() => handleAddCategory()}
                >
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
