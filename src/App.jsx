import { RiTodoLine } from "react-icons/ri";

/* eslint-disable react/prop-types */

const practiceItems = [
  { id: 1, description: "Go to the Gym", done: false },
  { id: 2, description: "Go to the Shops", done: false },
  { id: 3, description: "Read", done: true },
];

export default function App() {
  return (
    <div className="w-full h-screen grid grid-rows-[200px_auto_1fr_auto]">
      <Navbar />
      <Form />
      <List />

      <Stats />
    </div>
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
  return (
    <div className="bg-Very-Dark-Grayish-Blue flex items-center justify-center font-semibold px-2 py-3 ">
      <h3>Create a new todo...</h3>
    </div>
  );
}

function List() {
  return (
    <div className="bg-neutral-500 p-[4rem] flex justify-between flex-col gap-4 items-center font-semibold">
      <ul>
        {practiceItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.done ? { textDecoration: "line-through" } : {}}>
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
