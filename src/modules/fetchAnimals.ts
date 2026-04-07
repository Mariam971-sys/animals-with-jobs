import type { IAnimal } from "./IAnimal.js";

/**
 * Hämtar lista med djur från data/data.json
 * Returnerar alltid IAnimal[], tom array om fel
 */
export default async function fetchAnimals(): Promise<IAnimal[]> {
  try {
    const dataUrl = new URL("../../data/data.json", import.meta.url);
    const response = await fetch(dataUrl);
    if (!response.ok) {
      console.error("Failed to fetch animals:", response.statusText);
      return [];
    }
    const data: IAnimal[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching animals:", error);
    return [];
  }
}