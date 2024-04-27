import { useState } from "react";
import Item from "./Item";

/* eslint-disable react/prop-types */

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

export default List;
