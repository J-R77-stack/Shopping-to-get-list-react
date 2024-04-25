import { RiTodoLine } from "react-icons/ri";

/* eslint-disable react/prop-types */

const practiceItems = [
  { id: 1, description: "Go to the Gym ", done: false },
  { id: 2, description: "Go to the Shops", done: false },
  { id: 3, description: "Read", done: true },
];

export default function App() {
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="xl:w-3/5 m-auto h-screen grid grid-rows-[200px_auto_1fr_auto]">
        <Navbar />
        <Form />
        <List />

        <Stats />
      </div>
    </>
  );
}

function Navbar() {
  return (
    <nav className="bg-slate-500 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center ml-8">
        <h1 className="text-white text-3xl tracking-widest">TODO</h1>
      </div>
      <div className="flex items-center text-white justify-center mr-8 text-3xl">
        <RiTodoLine />
      </div>
    </nav>
  );
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <div className="bg-Very-Dark-Grayish-Blue flex items-center justify-center font-semibold px-2 py-3 ">
      <form
        className="flex items-center p-2 gap-4 cursor-pointer"
        onSubmit={handleSubmit}>
        <h3>Add a new todo... </h3>
        <input
          type="text"
          placeholder="Go Shopping"
          className="border-0 rounded p-1 "
        />
        <button className="bg-emerald-200 border-0 rounded p-1">ADD </button>
      </form>
    </div>
  );
}

function List() {
  return (
    <div className="bg-neutral-500 p-[4rem] flex justify-between flex-col gap-4 items-center font-semibold">
      <ul className="list-none grid sm:grid-cols-3 gap-4">
        {practiceItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li className="rounded mb-2 bg-neutral-900 font-medium text-white px-6 py-2 flex p-4 justify-between gap-4">
      <span
        style={
          item.done
            ? {
                textDecoration: "line-through",
                textDecorationColor: "red",
                textDecorationThickness: "3px",
              }
            : {}
        }>
        {item.description}
      </span>
      <button> X</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="bg-emerald-200 text-center font-semibold p-[3.2rem]">
      You have X items on your List
    </footer>
  );
}
