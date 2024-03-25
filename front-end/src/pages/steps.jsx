import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../components/layout/Context.jsx";

export default function StepsFunction() {
  const router = useRouter();
  const [steps, setSteps] = useState(1);
  const [currency, setCurrency] = useState("MNT");
  const [balance, setBalance] = useState("");
  const selectRef = useRef(null);
  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  const { userData, setUserData } = useContext(Context);

  const changeSteps = async () => {
    if (steps === 1) {
      const selectedCurrency = selectRef.current.value;
      setCurrency(selectedCurrency === "usd" ? "USD" : "MNT");
      setSteps(2);
    } else if (steps === 2) {
      try {
        const userSavedData = {
          ...userData,
          currency_type: currency,
          balance: balance,
        };
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ENDPOINT}/users/signup`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            method: "POST",
            mode: "cors",
            body: JSON.stringify(userSavedData),
          }
        );
        if (res.ok) {
          console.log("User created successfully");
        }

        if (!res.ok) throw new Error("Failed to create new user");
        const response = await res.json();
        console.log(response);
        setSteps(3);
        router.push("/dashboard");
      } catch (error) {
        console.error("Error", error);
      }
    }
  };

  const renderSteps = () => {
    switch (steps) {
      case 1:
        return (
          <select
            name="currency"
            id="currency"
            ref={selectRef}
            className="select w-full  border-gray-800"
          >
            <option className="text-secondary" value="mnt">
              MNT - Mongolian Tugrik
            </option>
            <option className="text-secondary" value="usd">
              USD - United States Dollar
            </option>
          </select>
        );
      case 2:
        return (
          <input
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            placeholder="Amount"
            type="text"
            className="w-[352px]"
          />
        );
    }
  };

  const getTitleAndText = () => {
    switch (steps) {
      case 1:
        return {
          title: "Select base currency",
          text: "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one.",
        };
      case 2:
        return {
          title: "Set up your cash Balance",
          text: "How much cash do you have in your wallet?",
        };
      case 3:
        return {
          title: "Good Job!",
          text: "Your very first account has been created. Now continue to dashboard and start tracking.",
        };
      default:
        return { title: "", text: "" };
    }
  };

  return (
    <div className="max-w-screen h-screen  ">
      <div className="flex flex-col justify-center items-center gap-[141px] ">
        {/* Logo Section */}
        <div className="flex flex-col gap-4">
          <img src="./logo.svg" alt="" />

          <ul className="steps steps-vertical lg:steps-horizontal  ">
            <li className="step step-primary px-5">Currency</li>
            <li className={`step ${steps === 1 ? "" : "step-primary"}`}>
              Balance
            </li>
            <li className={`step ${steps === 3 ? "step-primary" : ""}`}>
              Finish
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <div className=" w-full flex flex-col gap-6 ">
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="size-8 bg-primary p-2 rounded-full">
                {steps === 1 && <img src="./Money.svg" alt="" />}
                {steps === 2 && <img src="./Coins.svg" alt="" />}
                {steps === 3 && <img src="./Check.svg" alt="" />}
              </div>

              {/* <h2 className="text-2xl font-bold">Select base currency </h2> */}
            </div>

            <div className=" flex justify-center text-2xl text-black font-bold">
              {getTitleAndText().title}
            </div>

            <div className="mt-6">
              <div className="text-xs text-accent">
                {renderSteps()}
                <p className=" mt-6 text-xs text-accent">
                  {getTitleAndText().text}
                </p>
              </div>
            </div>
            {/* <p className="text-xs text-accent">
              Your base currency should be the one you use most often. All{" "}
              <br></br>
              transaction in other currencies will be calculated based on this
              one
            </p> */}
          </div>

          <button
            onClick={changeSteps}
            className="btn btn-primary flex-initial"
          >
            {steps === 1 && `Confirm `}
            {steps === 2 && `Confirm `}
            {steps === 3 && `Go to Dashboard`}
          </button>
        </div>
      </div>
    </div>
  );
}
