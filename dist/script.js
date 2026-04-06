import fetchAnimals from '../fetchAnimals.js';
import { renderList } from '../renderList.js';
import { renderAnimalInfo } from '../renderAnimalInfo.js';

async function init() {
    const animals = await fetchAnimals();
    renderList(animals, renderAnimalInfo);
}

document.addEventListener("DOMContentLoaded", init);