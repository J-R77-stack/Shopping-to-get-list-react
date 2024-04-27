/* eslint-disable react/prop-types */

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

export default Stats;
