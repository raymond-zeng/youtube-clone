import SearchBar from "@/components/searchbar";



export default function Home() {
  return (
    <div>
      <div className="flex items-center ">
        <div className="flex justify-left pl-5 pt-5">
          <button>
            <img src="/menu.svg" alt="menu" className="w-6 h-6" />
          </button>
        </div>
        <div className="flex justify-left pl-5 pt-5">
          <img src="/youtube-logo.svg" alt="logo" className="w-24 h-12" />
        </div>
        <SearchBar />
      </div>
    </div>
  );
}
