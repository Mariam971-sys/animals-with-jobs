export const renderAnimalInfo = (animal) => {
    // 1️⃣ Hel div-ka meesha aan ku soo bandhigi doono macluumaadka animal-ka
    const container = document.getElementById("animal-info");
    if (!container)
        return; // Haddii div-ka uusan jirin, jooji function-ka
    // 2️⃣ Nadiifi wax kasta oo hore ugu jiray div-ka
    container.innerHTML = "";
    // =====================================================
    // 3️⃣ Render sawirka animal-ka
    // Haddii animal.imageUrl jiro, abuuro <img> oo ku dar container-ka
    // Max-width ayaa lagu daraa si sawirku uusan u weynaan
    // =====================================================
    if (animal.imageUrl) {
        const img = document.createElement("img");
        img.src = animal.imageUrl; // URL-ka sawirka
        img.alt = `${animal.name} the ${animal.kindOfAnimal}`; // Alt text u eg "Gina the Giraffe"
        img.style.maxWidth = "200px"; // Sawirka ha ka weyneyn 200px
        container.appendChild(img);
    }
    // =====================================================
    // 4️⃣ Render magaca iyo nooca animal-ka
    // Format: "Gina the Giraffe"
    // =====================================================
    const nameType = document.createElement("h2");
    nameType.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    container.appendChild(nameType);
    // =====================================================
    // 5️⃣ Render job-ka iyo status-ka shaqada
    // Format: "Trash Analyst - Currently employed" ama "Currently not employed"
    // employmentEndDate ayaa go'aaminaysa status-ka
    // =====================================================
    const jobPara = document.createElement("p");
    const employmentStatus = animal.employmentEndDate
        ? "Currently not employed"
        : "Currently employed";
    jobPara.textContent = `${animal.job} - ${employmentStatus}`;
    container.appendChild(jobPara);
    // =====================================================
    // 6️⃣ Render da’da animal-ka
    // Xisaabi age = currentYear - birthYear
    // Format: "Age: 9 years old."
    // =====================================================
    const agePara = document.createElement("p");
    const currentYear = new Date().getFullYear(); // Sanadka hadda
    const age = animal.birthYear ? currentYear - animal.birthYear : "Unknown";
    agePara.innerHTML = `<strong>Age:</strong> ${age} years old.`;
    container.appendChild(agePara);
    // =====================================================
    // 7️⃣ Render skills
    // Haddii skills jiro, abuuro <ul> li kasta ku dar <li>
    // Haddii skills ma jiraan, qora "No skills"
    // =====================================================
    const skillsHeading = document.createElement("p");
    skillsHeading.innerHTML = "<strong>Skills:</strong>"; // Rubuc horyaal ah
    container.appendChild(skillsHeading);
    if (animal.skills && animal.skills.length > 0) {
        const skillsList = document.createElement("ul");
        animal.skills.forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });
        container.appendChild(skillsList);
    }
    else {
        const noSkills = document.createElement("p");
        noSkills.textContent = "No skills";
        container.appendChild(noSkills);
    }
};
