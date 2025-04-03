"use client";
// avec l'instrction ci dessus ce composant sera rendu coté client ! et non coté serveur
import { useState } from "react";

export default function Counter() {
	// on peut faire un state car ce petit composant est rendu coté client
	const [nbClick, setNbClick] = useState(0);

	console.log("render counter");
	return (
		<button type="button" onClick={() => setNbClick(nbClick + 1)}>
			{nbClick} ❤️
		</button>
	);
}
