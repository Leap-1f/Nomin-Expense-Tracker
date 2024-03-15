import Link from "next/link";

import { useContext } from "react";
import { Context } from "./layout/Context";

export function HeaderBar() {
  const { handleOpenModal } = useContext(Context);

  return (
    <div className="max-w-screen  mx-0 h-full bg-white flex flex-row py-4 px-[120px] justify-between items-center">
      <div className="flex flex-row gap-6 items-center">
        <Link href={{ pathname: "/index" }}>
          <img className="7" src="./Vector.svg" alt="" />
        </Link>

        <Link href={{ pathname: "/dashboard" }}>
          <h1>Dashboard</h1>
        </Link>

        <Link href={{ pathname: "/records" }}>
          <h1>Records</h1>
        </Link>
      </div>
      <div className="flex flex-row items-center gap-6">
        <button
          onClick={handleOpenModal}
          className="text-base text-white bg-primary rounded-3xl px-3 py-0"
        >
          + Record
        </button>

        <div className="avatar size-10">
          <div className="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
