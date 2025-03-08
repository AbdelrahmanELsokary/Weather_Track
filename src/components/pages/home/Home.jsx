export function Home({ loading, data }) {
  if (loading) {
    return (
      <>
        <div className="container py-20 flex flex-col justify-center items-center">
          <h1 className="text-3xl text-white">Loading...</h1>
          <div className="w-16 h-16 border-4 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </>
    );
  } else if (!data || !data.location || !data.current) {
    return (
      <>
        <section>
          <div className="container backdrop-blur-3xl flex flex-col w-[60%] p-20 m-auto mt-20 rounded-3xl">
            <h1 className="text-center text-5xl text-white font-black">
              Welcome To Weather Track <br /> <span className="block font-normal py-6">Enter a City Name</span>
            </h1>
            <img src="/public/assets/images/cloud&sun.webp" alt="cloud&sun image" className="w-52 m-auto" />
          </div>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section>
          <div className="container flex flex-wrap items-center justify-around backdrop-blur-3xl w-[60%] p-8 m-auto mt-20 rounded-3xl text-white">
            <div className="col_1">
              <h2 className=" flex items-center justify-center font-bold text-4xl">
                Weather Details Today <img src={data.current.condition.icon} />
              </h2>
              <br />
              <span className="text-4xl font-bold">Location : </span>
              <span className="font-medium text-2xl border-solid border-b">
                {data.location.name}, {data.location.region}
              </span>
              <br />
              <br />
              <span className="inline-block text-2xl font-bold py-2">Current time : </span>
              <span className="font-medium"> {data.location.localtime}</span>
              <br />
              <span className="inline-block text-2xl font-bold py-2">Temperature : </span>
              <span className="font-medium"> {data.current.temp_c} </span>
              <br />
              <span className="inline-block text-2xl font-bold py-2">Wind Direction :</span>
              <span className="font-medium"> {data.current.wind_dir}</span>
              <br />
              <span className="inline-block text-2xl font-bold py-2">Cloud :</span>
              <span className="font-medium"> {data.current.cloud}</span>
              <br />
              <span className="inline-block text-2xl font-bold py-2">Rain :</span>
              <span className="font-medium"> {data.current.precip_mm}</span>
            </div>
            <div className="col_2">
              <img src="assets/images/2480636.png" className="w-52" />
            </div>
          </div>
        </section>
      </>
    );
  }
}
