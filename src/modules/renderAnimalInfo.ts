import { IAnimal } from "./IAnimals";

export const renderAnimalInfo = (animal: IAnimal): void => {
  const container = document.getElementById("animal-info");
  if (!container) return;

  container.innerHTML = "";

  // Image
  if (animal.imageUrl) {
    const img = document.createElement("img");
    img.src = `images/${animal.imageUrl}`;
    img.alt = `${animal.name} the ${animal.kindOfAnimal}`;
    img.style.maxWidth = "200px";
    container.appendChild(img);
  }

  // Name + Type
  const nameType = document.createElement("h2");
  nameType.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
  container.appendChild(nameType);

  // Job + Employment Status
  const jobPara = document.createElement("p");
  const employmentStatus = animal.employmentEndDate
    ? "Currently not employed"
    : "Currently employed";
  jobPara.textContent = `${animal.job} - ${employmentStatus}`;
  container.appendChild(jobPara);

  // Age
  const agePara = document.createElement("p");
  const currentYear = new Date().getFullYear();
  const birthYearNum = parseInt(animal.birthYear);
  const age = isNaN(birthYearNum) ? "Unknown" : currentYear - birthYearNum;
  agePara.innerHTML = `<strong>Age:</strong> ${age} years old.`;
  container.appendChild(agePara);

  // Skills
  const skillsHeading = document.createElement("p");
  skillsHeading.innerHTML = "<strong>Skills:</strong>";
  container.appendChild(skillsHeading);

  if (animal.skills) {
    const skillsList = document.createElement("ul");

    if (Array.isArray(animal.skills)) {
      animal.skills.forEach((skill) => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = animal.skills;
      skillsList.appendChild(li);
    }

    container.appendChild(skillsList);
  } else {
    const noSkills = document.createElement("p");
    noSkills.textContent = "No skills";
    container.appendChild(noSkills);
  }
};