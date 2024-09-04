// map and local State variable beahviour
import "./App.css";
import React, { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(7336);

  function handleClick(quesId) {
    quesId === selectedId ? setSelectedId(null) : setSelectedId(quesId);
  }

  return (
    <div className="flashcards">
      {questions.map((ques) => (
        <div
          key={ques.id}
          className={ques.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(ques.id)}
        >
          <p>{ques.id === selectedId ? ques.answer : ques.question}</p>
        </div>
      ))}
    </div>
  );
}

// import "./App.css";
// import React, { useState } from "react";

// const initalItem = [
//   { id: 1, descreption: "Passport", quantitiy: 2, packed: false },
//   { id: 2, descreption: "Charger", quantitiy: 1, packed: false },
// ];

// function Logo() {
//   return <h1>Far Away</h1>;
// }

// function Form({ setItemData }) {
//   const [descreption, setDescreption] = useState("");
//   const [quantity, setQuantity] = useState(1);

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (!descreption.trim()) return;

//     setItemData((prevItem) => [
//       ...prevItem,
//       { id: Math.random(), descreption, quantity, packed: false },
//     ]);

//     setDescreption("");
//     setQuantity(1);
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <span>What do you need: </span>
//         <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
//           {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>

//         <input
//           type="text"
//           placeholder="Item...."
//           value={descreption}
//           onChange={(e) => setDescreption(e.target.value)}
//         />
//         <button type="submit">Add</button>
//       </form>
//     </>
//   );
// }

// function PackingList({ itemData }) {
//   return (
//     <ul>
//       {itemData.map((item) => (
//         <Item key={item.id} item={item} />
//       ))}
//     </ul>
//   );
// }

// function Item({ item }) {
//   return (
//     <li>
//       <input type="checkbox" />
//       <span>{item.descreption}</span>
//       <span>{item.packed ? "✔️" : "❌"}</span>
//     </li>
//   );
// }

// function Stats() {
//   return (
//     <footer>
//       <p>you have X item on youre list and you have packed x% </p>
//     </footer>
//   );
// }

// function App() {
//   const [itemData, setItemData] = useState(initalItem);

//   return (
//     <>
//       <Logo />
//       <Form setItemData={setItemData} />
//       <PackingList itemData={itemData} />
//       <Stats />
//     </>
//   );
// }

// export default App;
