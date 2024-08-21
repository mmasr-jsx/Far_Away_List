import { React } from "react";


export default function Stats({items}) {
    console.log(items.length);

    if (!items.length ) { return (
        <footer className="stats">
            <em>You got nothing, Start packing cmon!!</em>
        </footer>
    )
    }
    
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const stat = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {stat === 100 ? 'You got everything fam 😎' : `You have items ${numItems} on your list, and you already packed ${numPacked} (${stat})`}</em>
        </footer>
    );
}