const tileData = [
    { category: "category1", size: "large-square", title: "Плитка 1", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content1.html" },
    { category: "category2", size: "small-square", title: "Плитка 2", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content2.html" },
    { category: "category3", size: "horizontal-rectangle", title: "Плитка 3", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content3.html" },
    { category: "category1", size: "vertical-rectangle", title: "Плитка 4", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content4.html" },
    { category: "category2", size: "small-square", title: "Плитка 5", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content5.html" },
    { category: "category3", size: "large-square", title: "Плитка 6", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content6.html" },
    { category: "category2", size: "horizontal-rectangle", title: "Плитка 7", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content7.html" },
    { category: "category3", size: "vertical-rectangle", title: "Плитка 8", img: "https://avavatar.ru/images/avatars/44/avatar_ItfsQxuFUpO210Rf.jpg", modalContentFile: "content8.html" },
];

const tileContainer = document.querySelector('.tile-container');

tileData.forEach(tile => {
    const tileElement = document.createElement('div');
    tileElement.classList.add('tile', tile.size);
    tileElement.setAttribute('data-category', tile.category);

    const imgElement = document.createElement('img');
    imgElement.src = tile.img;
    imgElement.alt = tile.title;

    const titleElement = document.createElement('div');
    titleElement.classList.add('tile-title');
    titleElement.textContent = tile.title;

    tileElement.appendChild(imgElement);
    tileElement.appendChild(titleElement);

    tileElement.addEventListener('click', () => openModal(tile.modalContentFile));

    tileContainer.appendChild(tileElement);
});

const filterButtons = document.querySelectorAll('.filter-buttons button');
const tiles = document.querySelectorAll('.tile');

filterButtons.forEach(button => {
    button.addEventListener('click', event => {
        const filter = button.getAttribute('data-filter');
        filterTiles(filter);
        filterButtons.forEach(btn => btn.classList.remove('active'));
        event.target.classList.add('active');
        // Обновление атрибутов aria-pressed
        filterButtons.forEach(btn => btn.setAttribute('aria-pressed', 'false'));
        event.target.setAttribute('aria-pressed', 'true');
    });

    // Создание пользовательской подсказки
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = button.getAttribute('data-tooltip');
    button.appendChild(tooltip);

    button.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
    });

    button.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
});

function filterTiles(filter) {
    tiles.forEach(tile => {
        if (filter === 'all' || tile.getAttribute('data-category') === filter) {
            tile.classList.remove('hidden');
        } else {
            tile.classList.add('hidden');
        }
    });
}

const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeButton = document.querySelector('.close-button');

function openModal(contentFile) {
    fetch(contentFile)
        .then(response => response.text())
        .then(data => {
            modalBody.innerHTML = data;
            modal.style.display = 'block';
        })
        .catch(error => console.error('Error loading modal content:', error));
}

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});