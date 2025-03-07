import { Link } from 'react-router';
export function Header({ setLocation, onClick }) {
  return (
    <>
      <header className="sticky top-0 backdrop-blur-md py-6 z-10">
        <div className="w-[90%] flex items-center justify-center md:justify-between flex-wrap gap-7 mx-auto">
          <div className="logo">
            <Link to="/" className="md:font-bold text-4xl text-yellow-50">
              Weather Track
            </Link>
          </div>
          <div className="search flex flex-wrap justify-center gap-3">
            <input
              type="text"
              placeholder="Enter country's name"
              className="w-72 py-2 pr-16 pl-3 bg-[#fb710037] rounded-md outline-none placeholder:text-white"
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <button type="button" className="bg-[#fb7100cd] px-6 py-2 rounded-md text-white font-medium text-lg" onClick={onClick}>
              Search
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
