import fetchAnimals from "./modules/fetchAnimals";
import { renderList } from "./modules/renderListOfAnimals";
import { renderAnimalInfo } from "./modules/renderAnimalInfo";

const init = async (): Promise<void> => {
  const animals = await fetchAnimals();

  if (animals) {
    renderList(animals, (animal) => renderAnimalInfo(animal));
  }
};

init();