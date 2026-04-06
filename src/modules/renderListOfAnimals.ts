import { IAnimal } from "./IAnimals";

export const renderList = (
  animals: IAnimal[],
  onClick: (animal: IAnimal) => void
): void => {
  const ul = document.getElementById("animal-list") as HTMLUListElement | null;
  if (!ul) return;

  ul.innerHTML = "";

  animals.forEach((animal) => {
    const li = document.createElement("li");
    li.textContent = animal.name;

    li.addEventListener("click", () => onClick(animal));

    ul.appendChild(li);
  });
};