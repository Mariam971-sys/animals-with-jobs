/**
 * Hämtar lista med djur från data/data.json
 * Returnerar alltid IAnimal[], tom array om fel
 */
export default async function fetchAnimals() {
    try {
        const response = await fetch("data/data.json");
        if (!response.ok) {
            console.error("Failed to fetch animals:", response.statusText);
            return [];
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching animals:", error);
        return [];
    }
}
