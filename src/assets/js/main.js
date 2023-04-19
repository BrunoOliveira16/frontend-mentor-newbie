import db from '../../data/db.js';
const containerCard = document.getElementById('container-card');

// Cria o HTML para um único card de projeto
const createProjectCard = (project) => {
    // Cria o HTML para as tags do projeto
    const tagsHtml = project.tags.map(tag => `<span class=${tag.id}>${tag.name}</span>`).join('');

    return `
        <div class="card">
            <div class="card-image">
                <img src=${project.image} alt=${project.name}>
            </div>
            <div class="card-content">
                <h3>${project.name}</h3>
                <h3>${tagsHtml}</h3>
                <p>${project.description}</p>
                <div class="card-content-link">
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
