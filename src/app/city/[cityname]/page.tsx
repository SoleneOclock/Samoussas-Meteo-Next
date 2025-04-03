// pour recuperer la valeur d'un segment d'URL dynamique on utilise la promesse params reçue en props (equivalent de useParams avec react-router)

interface CityPageProps {
	params: Promise<{ cityname: string }>;
}

export default async function CityPage({ params }: CityPageProps) {
	// on recupere la vill de l'URL
	const { cityname } = await params;

	// on recupere la clé API dans le fichier .env.local
	const myApiKey = process.env.KEY_API;

	const getTemperature = async () => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${myApiKey}&units=metric`,
		);
		if (!response.ok) {
			// si une erreur est throw, pas besoin de try catch, elle sera attrapée par Next et il affichera notre composant déclaré dans le fichier error.tsx
			throw new Error("404 endpoint non trouvé");
		}
		const data = await response.json();

		return { temp: data.main.temp, icon: data.weather[0].icon };
	};
	const { temp, icon } = await getTemperature();

	return (
		<main>
			<h1>Details de la ville : {cityname}</h1>
			<div>{temp} °C</div>
			<img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="desc" />
		</main>
	);
}
