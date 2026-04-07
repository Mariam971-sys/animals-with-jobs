import fetchAnimals from "./modules/fetchAnimals.js";
import { renderList } from "./modules/renderListOfAnimals.js";
import { renderAnimalInfo } from "./modules/renderAnimalInfo.js";

const init = async () => {
  const animals = await fetchAnimals();

  renderList(animals, (animal) => renderAnimalInfo(animal));

  const first = animals[0];
  if (first) {
    renderAnimalInfo(first);
  }
};

init();