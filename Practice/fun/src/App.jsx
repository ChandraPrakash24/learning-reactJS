import "./App.css"; // Import CSS for styling
import React, { useState } from "react";

function SearchForm({ searchText, setSearchText }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.value);

    setSearchText(item);
    setItem("");
  }

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button type="submit" value={item} onClick={handleSubmit}>
        Search
      </button>
    </form>
  );
}

function SearchResult({ searchText }) {
  return <p>You have Searched for: {searchText}</p>;
}

const App = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <header>
        Fruits
        <SearchForm searchText={searchText} setSearchText={setSearchText} />
      </header>
      <main>
        <SearchResult searchText={searchText} />
      </main>
    </>
  );
};

export default App;
