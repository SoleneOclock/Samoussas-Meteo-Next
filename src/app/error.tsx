"use client";

// ERROR
// ce composant sera rendu automatiquement au client si un components throw une erreur

export default function ErrorPage() {
	return (
		<div>
			<span className="bg-pink-600 text-4xl">Une erreur est survenue</span>
		</div>
	);
}
