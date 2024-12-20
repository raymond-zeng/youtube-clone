export default function SearchBar() {
    return (
        <div className="flex-grow flex justify-center pt-5">
          <input
            type="text"
            className="w-1/2 p-1 rounded-l-full border border-gray-300 text-black"
            placeholder="Search"
          />
          <button className="bg-red-500 text-white p-2 rounded-r-full">
            Search
          </button>
      </div>
    );
}