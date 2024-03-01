export default function Loader() {
  return (
    <div className="max-w-screen h-screen  ">
      <div className="flex flex-col justify-center items-center gap-4 ">
        <img src="./xl-logo.svg" alt="" />

        <span className="loading loading-spinner text-primary"></span>

        <p> Түр хүлээнэ үү ...</p>
      </div>
    </div>
  );
}
