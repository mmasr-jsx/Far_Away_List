import { React, useState } from "react";


export default function Form({items, onAddItem}) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();

        if (!description) return;

        const newItem = { description, quantity, packed: false, id: Date.now() };

        onAddItem(newItem);    
    }
    
    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip? 🍺🍻</h3>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {/*Creates an array from 1 to 20 */}
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (<option value={num} key={num}>{num}</option>))}
            </select>
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Item..." />
            <button>Add</button>
        </form>
    );
}