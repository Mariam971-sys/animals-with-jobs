import { IAnimal } from "./IAnimals";

/**
 * Hämtar en lista med djur från data/data.json
 * @returns Array av IAnimal om lyckas, annars null
 */
export default async function fetchAnimals(): Promise<IAnimal[] | null> {
  try {
    const response = await fetch("data/data.json");

    if (!response.ok) {
      // Om anropet misslyckas (t.ex. 404, 500)
      console.error("Failed to fetch animals:", response.statusText);
      return null;
    }

    const data: IAnimal[] = await response.json();
    return data;
  } catch (error) {
    // Om fetch kastar ett error (t.ex. nätverksproblem)
    console.error("Error fetching animals:", error);
    return null;
  }
}