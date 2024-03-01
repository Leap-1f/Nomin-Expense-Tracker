export default function StepOneFunction() {
  return (
    <div className="max-w-screen h-screen  ">
      <div className="flex flex-col justify-center items-center gap-[141px] ">
        <div className="flex flex-col gap-4">
          <img src="./logo.svg" alt="" />

          <ul className="steps steps-vertical lg:steps-horizontal  ">
            <li className="step step-primary px-5">Currency</li>
            <li className="step step-primary ">Balance</li>
            <li className="step ">Finish</li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div className=" w-full flex flex-col gap-6 ">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="size-8 bg-primary p-2 rounded-full">
                <img src="./Money.svg" alt="" />
              </div>

              <h2 className="text-2xl font-bold">Select base currency </h2>
            </div>

            <select className="select w-full  border-gray-800">
              <option className="text-secondary">MNT - Mongolian Tugrik</option>
            </select>

            <p className="text-xs text-accent">
              Your base currency should be the one you use most often. All{" "}
              <br></br>
              transaction in other currencies will be calculated based on this
              one
            </p>
          </div>

          <button className="btn btn-primary flex-initial">Confirm</button>
        </div>
      </div>
    </div>
  );
}
