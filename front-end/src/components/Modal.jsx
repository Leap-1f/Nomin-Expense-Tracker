import Link from "next/link";
export function Modal() {
  return (
    <div className="max-w-screen  m-auto p-auto bg-gray-200 flex flex-col justify-center items-center">
      <div className=" w-[792px] h-[512px] rounded-xl  bg-white flex flex-col ">
        <div className="flex flex-row justify-between px-6 py-5">
          <h1 className="text-lg font-bold">Add Record</h1>
          <img src="./X.svg" alt="" />
        </div>
        <div className="divider"></div>
        <div className="grid grid-cols-2">
          {/* Column-1 */}
          <div className=" w-full flex  flex-col px-6 pt-4  pb-6 gap-5">
            <div className="buttons  flex flex-row ">
              <button className="text-white px-4 text-base rounded-3xl bg-primary ">
                Expense
              </button>
              <button className="text-white px-4 text-base  bg-gray-400 ">
                {" "}
              </button>
              <button className="text-white px-4 text-base rounded-3xl bg-gray-400 ">
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
                  <select className="select select-bordered w-fit max-w-xs">
                    <option disabled selected>
                      Find date
                    </option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1">
                  <p>Date</p>
                  <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>
                      Find time
                    </option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="text-white text-base rounded-3xl bg-primary">
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
  );
}
