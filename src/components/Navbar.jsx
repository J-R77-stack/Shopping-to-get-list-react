import sun from "../assets/images/icon-sun.svg";

function Navbar() {
  return (
    <nav className="bg-[url('/src/assets/images/bg-mobile-dark.jpg')] relative bg-cover bg-center bg-no-repeat mb-20 flex items-center justify-between pb-36 pt-12  ">
      <div className="flex flex-shrink-0 items-center ml-8">
        <h1 className="text-white text-3xl tracking-widest">TODO</h1>
      </div>
      <div className="flex items-center justify-center mr-8 ">
        <img src={sun} alt="sun" />
      </div>
      <div className="flex items-center justify-center absolute bottom-14 left-5">
        <div className="bg-Very-Dark-Grayish-Blue flex items-center justify-center rounded px-2 py-3 w-96 ">
          <p>Create a new todo...</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
