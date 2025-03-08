import { Loading } from './Loading';
import { Welcome } from './Welcome';
import { Api } from './api/Api_Data';
export function Home({ loading, data }) {
  if (loading) {
    return (
      <>
        <Loading />
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
            <img src="/assets/images/cloud&sun.webp" alt="cloud&sun image" className="w-52 m-auto" />
          </div>
        </section>
        <Welcome />
      </>
    );
  } else {
    return (
      <>
        <Api data={data} />
      </>
    );
  }
}
