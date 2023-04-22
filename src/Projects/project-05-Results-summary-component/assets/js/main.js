const url = 'https://raw.githubusercontent.com/BrunoOliveira16/frontend-mentor-newbie/main/src/Projects/project-05-Results-summary-component/data.json';
const summaryContent = document.getElementById('content')

fetch(url)
    .then(response => response.json())
    .then(data => {
        const html = data.map(item => {
            return `
            <div class="card__summary__content--item" id=${item.category.toLowerCase()}>
                <div class="type">
                    <img src=${item.icon} alt=${item.category}>
                    <p>${item.category}</p>
                </div>
                <div class="result">
                    <p>${item.score} <span>/ 100</span></p>
                </div>
            </div>
            `
        }).join('');

        summaryContent.innerHTML += html;
    });