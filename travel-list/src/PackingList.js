import { useState } from "react";
export default function PackingList({
  listobj,
  itemDelete,
  onPacked,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedList;
  if (sortBy === "input") sortedList = listobj.slice();
  if (sortBy === "alphabet") {
    sortedList = listobj
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedList = listobj.slice().sort((a, b) => Number(b.packed - a.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedList.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.packed}
              onChange={() => onPacked(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
              {item.quantity} {item.description}
            </span>
            <button onClick={() => itemDelete(item.id)}>❌</button>
          </li>
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input </option>
          <option value="alphabet"> sort alphabetically </option>
          <option value="packed"> sort by status </option>
        </select>
        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
