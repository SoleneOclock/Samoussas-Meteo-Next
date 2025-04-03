import Link from "next/link";

// TYPESCRIPT
interface CityProps {
	cityName: string;
}

// COMPOSANT coté server
// un composant executé coté serveur peut etre asynchrone, le client recevra une page de loading en attendant que la promesse soit résolue (pour peu qu'on ai créé un fichier loading.tsx)
export default async function City({ cityName }: CityProps) {
	// on recupere la clé API dans le fichier .env.local
	const myApiKey = process.env.KEY_API;

	// on veut faire un call api pour recuperer la temérature
	// en react normale ce composant serait executé coté client, il faudrait faire un state initialisé à [vide] puis declancher le fetch après le 1er rendu et placer les données dans le state ce qui déclancherait un second rendu avec l'affichage des données...
	// ici on peut juste await les resultat coté server, pas besoin de state

	const getTemperature = async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${myApiKey}&units=metric`,
		);
		if (!response.ok) {
			// si une erreur est throw, pas besoin de try catch, elle sera attrapée par Next et il affichera notre composant déclaré dans le fichier error.tsx
			throw new Error("404 endpoint non trouvé");
		}
		const data = await response.json();

		return data.main.temp;
	};
	const temp = await getTemperature();

	return (
		<Link
			href={`/city/${cityName}`}
			className="border w-1/3 sm:1/4 border-gray-50 p-4 rounded-sm hover:bg-fuchsia-400 bg-gray-50/50"
			key={cityName}
		>
			<div>{cityName}</div>
			<div>{temp}°C</div>
		</Link>
	);
}
