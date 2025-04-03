// import du composant Link de Next (casi identique au composant Link de react-router)
import Link from "next/link";

export default function Header() {
	return (
		<nav className="text-fuchsia-600 p-4 mb-4 text-2xl flex justify-center gap-4 bg-amber-200">
			<Link href="/">O'Meteo</Link>
			<Link href="/contact">Contact</Link>
		</nav>
	);
}
