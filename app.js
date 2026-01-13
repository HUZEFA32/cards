function createCard(name, image, description) {
    const container = document.getElementById("cards");

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${image}" alt="${name}">
        <h2>${name}</h2>
        <p>${description}</p>
    `;

    container.appendChild(card);
}


function createAllAvengers() {
    createCard("Iron Man", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman_lob_crd_01.jpg", "Genius inventor and billionaire.");
    createCard("Captain America", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/captainamerica_lob_crd_01.jpg", "Super-soldier with shield.");
    createCard("Thor", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/thor_lob_crd_01.jpg", "God of Thunder.");
    createCard("Hulk", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/hulk_lob_crd_01.jpg", "Green powerhouse.");
    createCard("Black Widow", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/blackwidow_lob_crd_01.jpg", "Expert spy.");
    createCard("Hawkeye", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/hawkeye_lob_crd_01.jpg", "Master archer.");
    createCard("Spider-Man", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/spiderman_lob_crd_01.jpg", "Teen superhero.");
    createCard("Doctor Strange", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/doctorstrange_lob_crd_01.jpg", "Master of magic.");
}


createAllAvengers();
