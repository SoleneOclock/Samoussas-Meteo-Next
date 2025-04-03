// TYPESCRIPT
interface CityProps {
	cityName: string;
}

// COMPOSANT
// coté server un composant à le droit d'etre asynchrone il sera executé coté serveur , le temps que ça await, le client recevra une page de loading en attendant (pour peu qu'on ai créé un fichier loading.tsx)
export default async function City({ cityName }: CityProps) {
	// on recupere la clé API dan sle fichier .env.local
	const myApiKey = process.env.KEY_API;

	// on veut faire un call api pour recuperer la temérature
	// en react normale ce composant serait executé coté client, il faudrait fair eun state initialisé à [vide] puis declancher le fetch après le 1er rendu et placer les données dans le state ce qui déclancherait un second rendu avec l'affichage des données

	const getTemperature = async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/weather?q=${cityName}&appid=${myApiKey}&units=metric`,
		);
		if (!response.ok) {
			throw new Error("404 endpoint non trouvé");
		}
		const data = await response.json();
		console.log(data);

		// simuler delay de 5 secondes
		await new Promise((resolve) => setTimeout(resolve, 5000));

		return data.main.temp;
	};
	const temp = await getTemperature();

	return (
		<div
			className="border w-1/3 sm:1/4 border-gray-50 p-4 rounded-sm hover:bg-fuchsia-400 bg-gray-50/50"
			key={cityName}
		>
			<div>{cityName}</div>
			<div>{temp}°C</div>
		</div>
	);
}
