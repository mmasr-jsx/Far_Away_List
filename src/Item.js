import { React } from "react";


export default function Item({item, onDelItem, onToggleItem}) {

    return(
        <li key={item.id} id={item.id}>
            <input type="checkbox" value={item.packed} onChange={() => {onToggleItem(item.id)}} />
            <span style={item.packed ? {textDecoration: "line-through"} : {}}>{item.quantity} {item.description}</span>
            <button onClick={() => onDelItem(item.id)}>❌</button>
        </li>);
}