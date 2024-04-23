import sun from "../assets/images/icon-sun.svg";

function Navbar() {
  return (
    <nav className="bg-slate-500 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center ml-8">
        <h1 className="text-white text-3xl tracking-widest">TODO</h1>
      </div>
      <div className="flex items-center justify-center mr-8 ">
        <img src={sun} alt="sun" />
      </div>
    </nav>
  );
}

export default Navbar;
