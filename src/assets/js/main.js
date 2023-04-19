import db from '../../data/db.js';
const containerCard = document.getElementById('container-card');

// Cria o HTML para um único card de projeto
const createProjectCard = (project) => {
    // Cria o HTML para as tags do projeto
    const tagsHtml = project.tags.map(tag => `<span class=${tag.id}>${tag.name}</span>`).join('');

    return `
        <div class="card">
            <div class="card__img--wrapper">
                <img src=${project.image} alt=${project.name} class="card__img">
            </div>
            <div class="card__content">
                <h2>${project.name}</h2>
                <h2 class="card__content--tag">${tagsHtml}</h2>
                <p>${project.description}</p>
                <div class="card__content--link">
                    <a href=${project.url_demo} target="_blank" rel="noopener">Ir para o Site</a>
                    <a href=${project.url_github} target="_blank" rel="noopener">Repositório</a>
                </div>
            </div>
        </div>
    `
}

// Atualiza a lista de projetos exibidos na página
const updateProjects = () => {
    // Cria um array de HTML para cada projeto e junta tudo em uma única string
    const newHtml = db.projects.map(createProjectCard).join('');
    // Adiciona o novo HTML ao elemento que contém os cartões de projeto
    containerCard.innerHTML += newHtml;
}

updateProjects();
