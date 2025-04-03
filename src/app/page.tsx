import City from "@/components/City";
import Counter from "@/components/Counter";

export default function Home() {
	const cities = ["Lully", "Montpellier"];
	console.log("render page");

	return (
		<div className="flex gap-4 flex-wrap justify-center">
			<Counter />

			{cities.map((city) => (
				<City cityName={city} key={city} />
			))}
		</div>
	);
}
