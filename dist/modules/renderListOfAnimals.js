export const renderList = (animals, onClick) => {
    const ul = document.getElementById("animal-list");
    if (!ul)
        return;
    ul.innerHTML = "";
    const setActive = (activeLi) => {
        ul.querySelectorAll(".animal-nav__item").forEach((li) => {
            li.classList.remove("animal-nav__item--active");
        });
        activeLi.classList.add("animal-nav__item--active");
    };
    animals.forEach((animal, index) => {
        const li = document.createElement("li");
        li.textContent = animal.name;
        li.className = "animal-nav__item";
        if (index === 0) {
            li.classList.add("animal-nav__item--active");
        }
        li.addEventListener("click", () => {
            setActive(li);
            onClick(animal);
        });
        ul.appendChild(li);
    });
};
