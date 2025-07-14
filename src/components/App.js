import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
const [isDarkMode, setIsDarkMode] = useState(false);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  function handledarkModeClick() {
    setIsDarkMode(!isDarkMode);
  }

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
