import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  function addToList(item) {
    setList((list) => [...list, item]);
  }
  function deleteItem(id) {
    const filtered_item = list.filter((item, index) => item.id !== id);
    setList(filtered_item);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addToList} />
      <PackingList listobj={list} itemDelete={deleteItem} />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1>🏝 Far Away 🧳</h1>;
}
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
    console.log(newItem);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for your trip ?)</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add ✔️</button>
    </form>
  );
}
function PackingList({ listobj, itemDelete }) {
  return (
    <>
      <div className="list">
        <ul>
          {listobj.map((item, index) => (
            <li key={index}>
              {item.quantity} <span>{item.description}</span>
              <button onClick={() => itemDelete(Number(item.id))}> ❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        🧳 You have X items on your list, and have already packed Y %percent of
        your luggage{" "}
      </em>
    </footer>
  );
}

export default App;
