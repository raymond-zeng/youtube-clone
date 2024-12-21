function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}


export default function Home() {
  return (
    <div className="flex flex-nowrap gap-4 pt-4 min-w-0 items-center">
      <div className="flex items-center space-x-4 pl-4">
        <button className="hover:bg-slate-100 p-2 rounded-full w-10 h-10">
          <img src="/menu.svg" alt="menu" className="w-6 h-6 min-w-6" />
        </button>
        <button>
          <img src="/youtube-logo.svg" alt="logo" className="w-24 h-12 min-w-24" />
        </button>
      </div>
      <div className="flex-grow flex justify-center">
        <input  
          type="text"
          className="h-10 w-1/3 pl-5 rounded-l-full border border-gray-300 text-black"
          placeholder="Search"
        />
        <button className="h-10 bg-slate-100 border border-grey-300 pl-6 pr-4 rounded-r-full">
          <img src="/search.svg" alt="search" className="w-5 h-5" />
        </button>
    </div>
      <div className="flex items-center space-x-4 pl-4 pr-4 ml-auto">
        <button className="bg-slate-100 text-black p-2 rounded-full pl-4 pr-4">
          + Create
        </button>
        <button className="hover:bg-slate-100 p-2 rounded-full w-10 h-10">
          <img src="/bell.svg" alt="apps" className="w-6 h-6 min-w-6" />
        </button>
        <button>
          <img src="/profile.svg" alt="apps" className="w-10 h-10 min-w-10" />
        </button>
      </div>
    </div>
  );
}