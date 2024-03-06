import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";

export default function LoginFunction() {
  const [values, SetValues] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  // const [data, SetData] = useState([
  //   {
  //     id: "",
  //     username: "",
  //     email: "",
  //     password: "",
  //     avatar_img: "",
  //     created_date: date,
  //     updated_date: date,
  //     curency_type: "",
  //   },
  // ]);

  // useEffect(() => {
  //   getData();
  // }, []);

  // const createData = async () => {
  //   const id = uuidv4();

  //   try {
  //     const response = await fetch(API_ENDPOINT, {
  //       method: "POST",
  //       mode: "cors",
  //       headers: {
  //         Accept: "application/json, text/plain, */*",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ ...userData, id }),
  //     });
  //     const responseData = await response.json();
  //     setData(responseData);
  //   } catch (error) {
  //     console.error("Error creating data:", error);
  //   }
  // };
  // console.log(data);

  // const addData = () => {
  //   console.log(userData);
  //   createData();
  // };
  return (
    <div className="max-w-screen-xl h-screen  ">
      <div className=" flex flex-row justify-center items-center">
        <div className="w-full h-full">
          <div className="flex flex-col justify-center gap-10 items-center">
            <div>
              <img src="./logo.svg" alt="" />
            </div>

            <div className="flex flex-col gap-1 justify-center">
              <h1 className="text-xl">Welcome Back</h1>
              <p className="text-base">
                Welcome back, Please enter your details
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="password" className="grow" value="password" />
              </label>

              <button className="btn btn-primary flex-initial">Log in</button>
            </div>

            <div className="flex flex-row gap-1 *:text-base">
              <p className="">Don't have account?</p>

              <Link href={{ pathname: "/register" }}>
                <p className="text-primary">Sign up</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-primary border-primary  w-full h-full"></div>
      </div>
    </div>
  );
}
