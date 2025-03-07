import { Link } from 'react-router';
export function Header() {
  return (
    <>
      <header className="backdrop-blur-md py-4">
        <div className="w-[90%]  flex items-center justify-center md:justify-between flex-wrap gap-7 mx-auto">
          <div className="logo">
            <Link className="md:font-bold text-4xl text-yellow-50">Weather Track</Link>
          </div>
          <div className="search flex flex-wrap justify-center gap-3">
            <input type="text" placeholder="Enter country's name" className="py-2 pr-16 pl-3 bg-[#fb710037] rounded-md outline-none placeholder:text-white" />
            <button type="button" className="bg-[#fb7100cd] px-6 py-2 rounded-md text-white font-medium text-lg">
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
