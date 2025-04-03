import City from "@/components/City";
import Header from "@/components/Header";

export default function Home() {
	const cities = ["Lully", "Montpellier"];
	console.log(cities);

	return (
		<div className="flex gap-4 flex-wrap justify-center">
			{cities.map((city) => (
				<City cityName={city} key={city} />
			))}
		</div>
	);
}
