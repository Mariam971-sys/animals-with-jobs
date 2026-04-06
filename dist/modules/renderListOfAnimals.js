export const renderList = (animals, onClick) => {
    const ul = document.getElementById("animal-list");
    if (!ul) return;

    // Rensa barnelementen
    ul.innerHTML = "";

    animals.forEach(animal => {
        const li = document.createElement("li");
        li.textContent = animal.name;
        li.addEventListener("click", () => onClick(animal));
        ul.appendChild(li);
    });
};