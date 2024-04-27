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

  function HandleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items in the list?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="xl:w-3/5 m-auto h-screen grid grid-rows-[200px_auto_1fr_auto]">
        <Navbar />
        <Form onAddingItems={HandleAddingItems} />
        <List
          items={items}
          onDeletingItems={HandleDeletingItem}
          onToggleItems={HandleToggleItem}
          onClearList={handleClearList}
        />

        <Stats items={items} />
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

function List({ items, onDeletingItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "done")
    sortedItems = items.slice().sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className="bg-neutral-500 p-[4rem] flex justify-between flex-col gap-4 items-center font-semibold">
      <ul className="list-none grid sm:grid-cols-3 gap-4">
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeletingItems={onDeletingItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="flex items-center p-2 gap-4 cursor-pointer">
        <select
          className="border-0 rounded p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="done">Sort by done status</option>
        </select>
        <button
          className="bg-emerald-200 border-0 rounded p-1"
          onClick={onClearList}>
          Clear list
        </button>
      </div>
    </div>
  );
}

function Item({ item, onDeletingItems, onToggleItems }) {
  return (
    <li className="rounded mb-2 bg-neutral-900 font-semibold capitalize text-white px-6 py-2 flex p-4 justify-between gap-4">
      <input
        type="checkbox"
        value={item.done}
        onChange={() => onToggleItems(item.id)}
      />
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

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="bg-emerald-200 text-center font-semibold p-[3.2rem]">
        Start adding some items to your list ⬆
      </p>
    );

  const numItems = items.length;
  const numDone = items.filter((item) => item.done).length;
  const percentage = Math.round((numDone / numItems) * 100);
  return (
    <footer className="bg-emerald-200 text-center font-semibold p-[3.2rem]">
      {percentage === 100
        ? "You have completed your list  🎉 👏🏻 🍾 "
        : `You have ${numItems} items on your List, and you have already completed
     ${numDone} (${percentage}%)`}
    </footer>
  );
}
