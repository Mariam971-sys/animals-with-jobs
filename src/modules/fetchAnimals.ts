import { IAnimal } from "./IAnimals";

/**
 * Hämtar en lista med djur från data/data.json
 * @returns Array av IAnimal om lyckas, annars null
 */
export default async function fetchAnimals(): Promise<IAnimal[] | null> {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) {
      console.error("Failed to fetch animals:", response.statusText);
      return null;
    }
    const data: IAnimal[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching animals:", error);
    return null;
  }
}