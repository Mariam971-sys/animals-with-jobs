export const renderAnimalInfo = (animal) => {
    const container = document.getElementById("animal-info");
    if (!container)
        return;
    // Rensa allt innehåll
    container.innerHTML = "";
    // 1️⃣ Image
    if (animal.imageUrl) {
        const img = document.createElement("img");
        img.src = `images/${animal.imageUrl}`;
        img.alt = `${animal.name} the ${animal.kindOfAnimal}`;
        img.style.maxWidth = "200px";
        container.appendChild(img);
    }
    // 2️⃣ Name + Type
    const nameType = document.createElement("h2");
    nameType.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    container.appendChild(nameType);
    // 3️⃣ Job + Employment Status
    const jobPara = document.createElement("p");
    const employmentStatus = animal.employmentEndDate
        ? "Currently not employed"
        : "Currently employed";
    jobPara.textContent = `${animal.job} - ${employmentStatus}`;
    container.appendChild(jobPara);
    // 4️⃣ Age
    const agePara = document.createElement("p");
    const currentYear = new Date().getFullYear();
    const birthYearNum = parseInt(animal.birthYear);
    const age = isNaN(birthYearNum) ? "Unknown" : currentYear - birthYearNum;
    agePara.textContent = `Age: ${age} years old.`;
    container.appendChild(agePara);
    // 5️⃣ Skills
    const skillsHeading = document.createElement("p");
    skillsHeading.textContent = "Skills:";
    container.appendChild(skillsHeading);
    if (animal.skills) {
        const skillsList = document.createElement("ul");
        if (Array.isArray(animal.skills)) {
            animal.skills.forEach((skill) => {
                const li = document.createElement("li");
                li.textContent = skill;
                skillsList.appendChild(li);
            });
        }
        else {
            const li = document.createElement("li");
            li.textContent = animal.skills;
            skillsList.appendChild(li);
        }
        container.appendChild(skillsList);
    }
    else {
        const noSkills = document.createElement("p");
        noSkills.textContent = "No skills";
        container.appendChild(noSkills);
    }
};
