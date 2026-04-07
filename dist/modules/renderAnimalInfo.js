export const renderAnimalInfo = (animal) => {
    const container = document.getElementById("animal-info");
    if (!container)
        return;
    container.innerHTML = "";
    if (animal.imageUrl) {
        const img = document.createElement("img");
        img.src = `images/${animal.imageUrl}`;
        img.alt = `${animal.name} the ${animal.kindOfAnimal}`;
        img.className = "animal-info__photo";
        const placeholderSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320" viewBox="0 0 320 320"><rect fill="#bdbdbd" width="320" height="320"/><text x="160" y="175" font-family="Arial,sans-serif" font-size="22" fill="#333" text-anchor="middle">${animal.name}</text><text x="160" y="205" font-family="Arial,sans-serif" font-size="14" fill="#555" text-anchor="middle">the ${animal.kindOfAnimal}</text></svg>`;
        img.addEventListener("error", () => {
            img.src = `data:image/svg+xml,${encodeURIComponent(placeholderSvg)}`;
        });
        container.appendChild(img);
    }
    const nameEl = document.createElement("h1");
    nameEl.className = "animal-info__name";
    nameEl.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    container.appendChild(nameEl);
    const jobPara = document.createElement("p");
    jobPara.className = "animal-info__job";
    const employmentStatus = animal.employmentEndDate
        ? "Currently not employed"
        : "Currently employed";
    jobPara.textContent = `${animal.job} - ${employmentStatus}`;
    container.appendChild(jobPara);
    const details = document.createElement("div");
    details.className = "animal-info__details";
    const agePara = document.createElement("p");
    agePara.className = "animal-info__age";
    const ageLabel = document.createElement("span");
    ageLabel.className = "animal-info__label";
    ageLabel.textContent = "Age: ";
    const ageValue = document.createElement("span");
    ageValue.className = "animal-info__age-value";
    const currentYear = new Date().getFullYear();
    const birthYearNum = parseInt(animal.birthYear, 10);
    const age = Number.isNaN(birthYearNum)
        ? "Unknown"
        : `${currentYear - birthYearNum} years old.`;
    ageValue.textContent = age;
    agePara.appendChild(ageLabel);
    agePara.appendChild(ageValue);
    details.appendChild(agePara);
    const skillsLabel = document.createElement("p");
    skillsLabel.className = "animal-info__label";
    skillsLabel.textContent = "Skills:";
    details.appendChild(skillsLabel);
    const skillsBlock = document.createElement("div");
    skillsBlock.className = "animal-info__skills-block";
    if (animal.skills) {
        const list = Array.isArray(animal.skills) ? animal.skills : [animal.skills];
        list.forEach((skill) => {
            const p = document.createElement("p");
            p.className = "animal-info__skill";
            p.textContent = skill;
            skillsBlock.appendChild(p);
        });
    }
    else {
        const p = document.createElement("p");
        p.className = "animal-info__skill";
        p.textContent = "—";
        skillsBlock.appendChild(p);
    }
    details.appendChild(skillsBlock);
    container.appendChild(details);
};
