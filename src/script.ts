import { fetchAnimals } from "./modules/fetchAnimals";
import { renderList } from "./modules/renderListOfAnimals";
import { renderAnimalInfo } from "./modules/renderAnimalInfo";

// 1️⃣ Define async init function
const init = async (): Promise<void> => {
  // 2️⃣ Fetch animals from API or file
  const animals = await fetchAnimals();

  // 3️⃣ Render list of animals in the UL
  // Pass a callback to renderAnimalInfo when an <li> is clicked
  if (animals) {
    renderList(animals, (animal) => {
      renderAnimalInfo(animal);
    });
  }
};

// 4️⃣ Call init to start everything
init();