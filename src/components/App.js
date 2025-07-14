import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((prev) => !prev);
  }

  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handledarkModeClick}>
         {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
