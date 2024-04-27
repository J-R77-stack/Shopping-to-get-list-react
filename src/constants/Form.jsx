import { useState } from "react";

/* eslint-disable react/prop-types */

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

export default Form;
