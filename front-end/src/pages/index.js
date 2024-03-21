import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-screen-xl m-auto flex felx-col justify-center items-center">
      <div className=" ">
        <ul className=" flex flex-row flex-wrap gap-5 *:text-4xl">
          <li>Home</li>
          <Link href={{ pathname: "/login" }}>
            <li>Login</li>
          </Link>
          <Link href={{ pathname: "/register" }}>
            <li>Register</li>
          </Link>
          {/* <Link href={{ pathname: "/loading" }}>
            <li>Loader</li>
          </Link> */}

          <Link href={{ pathname: "/dashboard" }}>
            <li>Dashboard</li>
          </Link>

          {/* <Link href={{ pathname: "/steps" }}>
            <li>Step</li>
          </Link> */}

          {/* <Link href={{ pathname: "/records" }}>
            <li>Records</li>
          </Link> */}
          {/* <Link href={{ pathname: "/modal-test" }}>
            <li>Modal</li>
          </Link> */}
        </ul>
      </div>
    </div>
  );
}
