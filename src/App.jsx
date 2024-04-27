import { useState } from "react";
import { RiTodoLine } from "react-icons/ri";

/* eslint-disable react/prop-types */

export default function App() {
  const [items, setItems] = useState([]);

  function HandleAddingItems(item) {
    setItems((items) => [...items, item]);
  }

  function HandleDeletingItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="xl:w-3/5 m-auto h-screen grid grid-rows-[200px_auto_1fr_auto]">
        <Navbar />
        <Form onAddingItems={HandleAddingItems} />
        <List items={items} onDeletingItems={HandleDeletingItem} />

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

function Form({ onAddingItems }) {
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, done: false, id: Date.now() };
    console.log(newItem);

    onAddingItems(newItem);

    setDescription("");
  }

  return (
    <div className="bg-Very-Dark-Grayish-Blue flex items-center justify-center font-semibold px-2 py-3 ">
      <form
        className="flex items-center p-2 gap-4 cursor-pointer"
        onSubmit={handleSubmit}>
        <h3>Add a new todo... </h3>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="border-0 rounded p-1"
          placeholder="Go Shopping"
        />
        <button className="bg-emerald-200 border-0 rounded p-1">ADD </button>
      </form>
    </div>
  );
}

function List({ items, onDeletingItems }) {
  return (
    <div className="bg-neutral-500 p-[4rem] flex justify-between flex-col gap-4 items-center font-semibold">
      <ul className="list-none grid sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <Item item={item} key={item.id} onDeletingItems={onDeletingItems} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeletingItems }) {
  return (
    <li className="rounded mb-2 bg-neutral-900 font-semibold capitalize text-white px-6 py-2 flex p-4 justify-between gap-4">
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
      <button onClick={() => onDeletingItems(item.id)}> ❌</button>
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
