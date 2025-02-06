body {
    background-color: #0e0e0e;
    margin: 0;
    font-family: 'Arial', sans-serif;
    color: #ffffff;
    overflow-x: hidden; /* Prevent horizontal scroll */
}

body.modal-open {
    overflow: hidden; /* Prevent page scroll when modal is open */
}

.tile-description, .tile-title {
    position: absolute;
    left: 0;
    right: 0;
    color: #fff;
    padding: 10px;
    opacity: 0;
    transition: opacity 0.3s;
    text-align: center;
    font-size: 14px;
}

.tile-description {
    top: 0;
    bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
}

.tile:hover .tile-description, .tile:hover .tile-title {
    opacity: 1;
}

.logo {
    text-align: center;
    font-size: 48px;
    font-weight: bold;
    margin: 30px 0 20px 0;
    color: #ff6f61;
    text-transform: uppercase;
    letter-spacing: 5px;
}

.filter-buttons {
    text-align: center;
    margin: 20px 0;
}

.filter-buttons button {
    background-color: #444;
    color: #fff;
    border: none;
    padding: 10px 15px;
    margin: 5px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s;
    font-size: 16px;
    position: relative;
}

.filter-buttons button:hover, .filter-buttons .active {
    background-color: #ff6f61;
}

/* Стили для пользовательских подсказок */
.tooltip {
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    white-space: nowrap;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
}

.tile-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-auto-rows: 100px;
    gap: 5px;
    justify-content: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #0e0e0e;
    grid-auto-flow: dense;
}

.tile {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    transition: transform 0.3s, box-shadow 0.3s, opacity 0.3s;
    cursor: pointer;
}

.tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.tile:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.large-square {
    grid-column: span 2;
    grid-row: span 2;
}

.small-square {
    grid-column: span 1;
    grid-row: span 1;
}

.horizontal-rectangle {
    grid-column: span 2;
    grid-row: span 1;
}

.vertical-rectangle {
    grid-column: span 1;
    grid-row: span 2;
}

.tile.hidden {
    display: none;
    opacity: 0;
    transform: scale(0.8);
    pointer-events: none;
    transition: opacity 0.3s, transform 0.3s;
}

@media (max-width: 600px) {
    .tile-container {
        grid-template-columns: repeat(auto-fill, 50px);
        grid-auto-rows: 50px;
    }

    .large-square, .horizontal-rectangle, .vertical-rectangle {
        grid-column: span 2;
        grid-row: span 2;
    }

    .tile {
        border-radius: 5px;
    }

    .tile-title {
        font-size: 12px;
    }
}

/* Стили для модального окна */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.7);
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 800px;
    border-radius: 10px;
    position: relative;
}

.close-button {
    color: #aaa;
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 28px;
    font-weight: bold;
}

.close-button:hover,
.close-button:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
}

.modal-body {
    max-height: 70vh;
    overflow-y: auto;
    padding-right: 15px;
}

.modal-body::-webkit-scrollbar {
    width: 12px;
}

.modal-body::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.modal-body::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

.modal-body::-webkit-scrollbar-thumb:hover {
    background: #555;
}