   // Card data (you can replace the placeholder data with your actual content)
   const cardData = [
    {
        title: "Card Title 1",
        content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        lastUpdated: "Last updated 3 mins ago",
        imageUrl: "URL_TO_IMAGE_1",
        tag_1: "Tag 1",
        tag_2: "Tag 2",
        tag_3: "Tag 3"
    },
    {
        title: "Card Title 2",
        content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        lastUpdated: "Last updated 3 mins ago",
        imageUrl: "URL_TO_IMAGE_2",
        tag_1: "Tag 1",
        tag_2: "Tag 2",
        tag_3: "Tag 3"
    },
    {
        title: "Card Title 3",
        content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        lastUpdated: "Last updated 3 mins ago",
        imageUrl: "URL_TO_IMAGE_3",
        tag_1: "Tag 1",
        tag_2: "Tag 2",
        tag_3: "Tag 3"
    },
    {
        title: "Card Title 4",
        content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        lastUpdated: "Last updated 3 mins ago",
        imageUrl: "URL_TO_IMAGE_3",
        tag_1: "Tag 1",
        tag_2: "Tag 2",
        tag_3: "Tag 3"
    },
    {
        title: "Card Title 5",
        content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
        lastUpdated: "Last updated 3 mins ago",
        imageUrl: "URL_TO_IMAGE_3",
        tag_1: "Tag 1",
        tag_2: "Tag 2",
        tag_3: "Tag 3"
    }
];

// Function to create a card
function createCard(card, index) {
    const cardContainer = document.getElementById("cardContainer");

    const cardElement = document.createElement("div");
    cardElement.className = `card mb-3 article-card-bg-color ${index % 2 === 0 ? 'even' : 'odd'}`;
    cardElement.style = "max-width: 90rem;height:14rem;";

    cardElement.innerHTML = `
    <div class="row g-0">
        <div class="col-md-3">
            <img src="${card.imageUrl}" class="img-fluid rounded-start" alt="Card Image">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <p class="card-text"><small class="text-body-secondary">${card.lastUpdated}</small></p>
                <h3 class="card-title">${card.title}</h3>
                <p class="card-text">${card.content}</p>
                <h5 src="tag-badge">
                    <span class="badge badge-secondary">${card.tag_1}</span>
                    <span class="badge badge-secondary">${card.tag_2}</span>
                    <span class="badge badge-secondary">${card.tag_3}</span>
                </h5>
            </div>
        </div>
    </div>
`;

    cardContainer.appendChild(cardElement);
}

// Loop through the cardData and create cards
cardData.forEach(createCard);