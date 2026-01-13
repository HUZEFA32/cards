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

