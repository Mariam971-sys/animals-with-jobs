export const renderAnimalInfo = (animal) => {
    const container = document.getElementById("animal-info");
    if (!container) return;

    // Rensa barnelementen
    container.innerHTML = "";

    // Bild
    if (animal.imageUrl) {
        const img = document.createElement("img");
        img.src = `images/${animal.imageUrl}`;
        img.alt = `${animal.name} the ${animal.kindOfAnimal}`;
        img.style.maxWidth = "200px";
        img.onerror = () => img.src = 'images/placeholder.png';
        container.appendChild(img);
    }

    // Namn + typ
    const h2 = document.createElement("h2");
    h2.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    container.appendChild(h2);

    // Jobb + status
    const jobPara = document.createElement("p");
    const employmentStatus = animal.employmentEndDate ? "Currently not employed" : "Currently employed";
    jobPara.textContent = `${animal.job} - ${employmentStatus}`;
    container.appendChild(jobPara);

    // Ålder
    const agePara = document.createElement("p");
    const currentYear = new Date().getFullYear();
    const birthYearNum = parseInt(animal.birthYear);
    const age = isNaN(birthYearNum) ? "Unknown" : currentYear - birthYearNum;
    agePara.textContent = `Age: ${age} years old.`;
    container.appendChild(agePara);

    // Skills
    const skillsHeading = document.createElement("p");
    skillsHeading.textContent = "Skills:";
    container.appendChild(skillsHeading);

    if (animal.skills) {
        const skillsList = document.createElement("ul");
        const skillsArray = Array.isArray(animal.skills) ? animal.skills : [animal.skills];
        skillsArray.forEach(skill => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });
        container.appendChild(skillsList);
    } else {
        const noSkills = document.createElement("p");
        noSkills.textContent = "No skills";
        container.appendChild(noSkills);
    }
};