import React from "react";
import { render } from "@testing-library/react";
import ShoppingList from "../components/ShoppingList";
import items from "../data/items";

test("renders shopping list items", () => {
  const { getByText } = render(<ShoppingList items={items} />);
  expect(getByText("Apples")).toBeInTheDocument();
});

function ShoppingList({ items }) {
  const [selectCategory, setSelectCategory] = useState("All");

  const filteredItems = items.filter((item) => {
    if (selectCategory === "All") return true;
    return item.category === selectCategory;
  }); // ✅ Added missing closing brace

  function handleCategoryChange(event) {
    setSelectCategory(event.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;