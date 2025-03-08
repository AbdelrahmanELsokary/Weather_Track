export function Welcome() {
  return (
    <>
      <section>
        <div className=" backdrop-blur-3xl flex flex-col w-[60%] p-20 m-auto mt-20 rounded-3xl">
          <h1 className="text-center text-2xl md:text-5xl text-white font-black ">
            Welcome To Weather Track <br /> <span className="block font-normal py-6">Enter a City Name</span>
          </h1>
          <img src="/public/assets/images/cloud&sun.webp" alt="cloud&sun image" className="w-52 m-auto" />
        </div>
      </section>
    </>
  );
}
