import Link from "next/link";
import { useState, useEffect } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { SignupSchema } from "../validations/userValidation.js";
import { useRouter } from "next/router.js";
import { Formik, Form, Field } from "formik";

export default function RegisterFunction() {
  const router = useRouter();
  // const API_ENDPOINT = "http://localhost:8080/";
  const [userData, setUserData] = useState();

  const createData = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/users", {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const responseData = await response.json();
      console.log(userData);
      setUserData(responseData);
      router.push("/steps");
    } catch (error) {
      console.error("Error creating data:", error);
    }
  };

  // const addData = async (event) => {
  //   event.preventDefault();
  //   // const isValid = await SignupSchema.isValid(userData);
  //   console.log(userData + "sefkh");
  //   // console.log(isValid);
  //   createData();
  // };
  return (
    <div className="max-w-screen-xl m-auto">
      <div className="main  container ">
        <div className=" w-full h-fullgrid grid-cols-2 mt-5 ">
          <div className=" bg-white flex flex-col justify-center  gap-10 items-center">
            <div>
              <img src="./logo.svg" alt="" />
            </div>

            <div className="flex flex-col gap-1">
              <h1 className="text-xl">Create Geld account</h1>
              <p className="text-base">
                Sign up below to create your Wallet account
              </p>
            </div>
            <div className="flex flex-col gap-4 ">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((error) => setTimeout(error, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
              ></Formik>
              ;
              {/* <form className="flex flex-col gap-4" onSubmit={createData}>
                <label className="input input-bordered flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    onChange={(event) => {
                      setUserData({ ...userData, name: event.target.value });
                    }}
                    className="grow"
                    placeholder=" Enter Your Name"
                  />
                </label>
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
                  <input
                    type="text"
                    name="email"
                    onChange={(event) =>
                      setUserData({ ...userData, email: event.target.value })
                    }
                    className="grow"
                    placeholder=" Enter Email"
                  />
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
                  <input
                    type="password"
                    name="password"
                    onChange={(event) =>
                      setUserData({ ...userData, password: event.target.value })
                    }
                    className="grow"
                    placeholder=" Enter Password"
                    // value="password"
                  />
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
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={(event) =>
                      setUserData({
                        ...userData,
                        confirmPassword: event.target.value,
                      })
                    }
                    className="grow"
                    // value="password"
                    placeholder="Re-Password"
                  />
                </label>

                {/* <Link rel="stylesheet" href={{ pathname: "/loading" }}> */}
                <button type="submit" className=" btn  btn-primary ">
                  Sign up
                </button>
                {/* </Link> */}
              </form> */}
            </div>

            <div className="flex flex-row gap-1 *:text-base">
              <p className="">Already have an account?</p>
              <Link href={{ pathname: "/login" }}>
                <p className="text-primary">Login in</p>
              </Link>
            </div>
          </div>

          {/* <div className=" bg-primary "></div> */}
        </div>
      </div>
    </div>
  );
}
