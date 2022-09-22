const projects = [
    {
        name: "Proyecto 1",
        picture: "url(./static/Project1_ifc.jpg)",
        description: "Project 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci.",
        URL: "./viewer01.html"
    },
    {
        name: "Proyecto 2",
        picture: "url(./static/Project2_ifc.jpg)",
        description: "Project 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci.",
        URL: "./viewer02.html"
    },
    {
        name: "Proyecto 3",
        picture: "url(./static/Project3_ifc.jpg)",
        description: "Project 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci.",
        URL: "./viewer03.html"
    },
    {
        name: "Proyecto 4",
        picture: "url(./static/Project4_ifc.jpg)",
        description: "Project 4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci.",
        URL: "./viewer04.html"
    },
    {
        name: "Proyecto 5",
        picture: "url(./static/Project5_ifc.jpg)",
        description: "Project 5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, adipisci.",
        URL: "./viewer05.html"
    }
]

const cardConteinier = document.getElementById("card-conteiner");
const cardProject = document.getElementById("card-project");
const projectCards = Array.from(cardConteinier.children);

const projectTemplate = projects[0];
const projectCardTemplate = projectCards[0];

for (project of projects){
    const newCard = projectCardTemplate.cloneNode(true);

    const projectName = newCard.querySelector('h2');
    projectName.textContent = project.name;

    newCard.style.backgroundImage=project.picture;

    const projectBio = newCard.querySelector('p');
    projectBio.textContent = project.description;

    const projectURL = newCard.querySelector('a');
    projectURL.href = project.URL;

    cardConteinier.appendChild(newCard);
} 

projectCardTemplate.remove();