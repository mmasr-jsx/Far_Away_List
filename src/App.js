import { useState } from "react";
import Stats from "./Stats";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDelItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("You sure?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form items={items} onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDelItem={handleDelItem}
        onToggleItem={handleToggleItem}
        onClear={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
