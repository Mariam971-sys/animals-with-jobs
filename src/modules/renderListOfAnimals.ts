import { IAnimal } from "./IAnimals";

export const renderList = (
  animals: IAnimal[],
  onClick: (animal: IAnimal) => void
): void => {
  // Hel UL-ka meesha list-ka lagu soo bandhigayo
  const ul = document.getElementById("animal-list") as HTMLUListElement | null;

  if (!ul) return;

  // Nadiifi liiskii hore
  ul.innerHTML = "";

  // Loop garee animals oo abuuro li kasta
  animals.forEach((animal) => {
    const li = document.createElement("li");
    li.textContent = animal.name;

    // Ku dar click event listener
    li.addEventListener("click", () => {
      onClick(animal);
    });

    // Ku dar li-ga UL-ka
    ul.appendChild(li);
  });
};