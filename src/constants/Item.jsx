/* eslint-disable react/prop-types */

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

export default Item;
