import { IAnimal } from './IAnimal.js'; // haddii IAnimal uu yahay JS ama TS module loo transpile gareeyey

export default async function fetchAnimals() {
    try {
        const response = await fetch("./data/data.json");
        if (!response.ok) {
            console.error("Failed to fetch animals:", response.statusText);
            return [];
        }
        const data = await response.json(); // Halkan ma jiri karo :IAnimal[]
        return data;
    } catch (error) {
        console.error("Error fetching animals:", error);
        return [];
    }
}