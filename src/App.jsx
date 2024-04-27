import { useState } from "react";
import Navbar from "./constants/Navbar";
import Form from "./constants/Form";
import List from "./constants/List";
import Stats from "./constants/Stats";

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
