import "./App.css";
import React, { useState } from "react";

const initalItem = [
  { id: 1, descreption: "Passport", quantitiy: 2, packed: false },
  { id: 2, descreption: "Charger", quantitiy: 1, packed: false },
];

function Logo() {
  return <h1>Far Away</h1>;
}

function Form({ setItemData }) {
  const [descreption, setDescreption] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!descreption.trim()) return;

    setItemData((prevItem) => [
      ...prevItem,
      { id: Math.random(), descreption, quantity, packed: false },
    ]);

    setDescreption("");
    setQuantity(1);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>What do you need: </span>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item...."
          value={descreption}
          onChange={(e) => setDescreption(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

function PackingList({ itemData }) {
  return (
    <ul>
      {itemData.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      <span>{item.descreption}</span>
      <span>{item.packed ? "✔️" : "❌"}</span>
    </li>
  );
}

function Stats() {
  return (
    <footer>
      <p>you have X item on youre list and you have packed x% </p>
    </footer>
  );
}

function App() {
  const [itemData, setItemData] = useState(initalItem);

  return (
    <>
      <Logo />
      <Form setItemData={setItemData} />
      <PackingList itemData={itemData} />
      <Stats />
    </>
  );
}

export default App;
