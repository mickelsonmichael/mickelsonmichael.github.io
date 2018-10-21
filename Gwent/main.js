
loadCardData();

function loadCardData() {
    let xhr = new XMLHttpRequest();

    xhr.overrideMimeType("application/json");
    xhr.open("GET", "cards.json", true);
    xhr.onloadend = function() {
        parseCardData(xhr.responseText);

        $("#cards-table").DataTable();
    }

    xhr.send();
}

function parseCardData(data) {
    let json = JSON.parse(data);

    parseNeutralCards(json.cards.neutral);
}

function parseNeutralCards(cards) {
    let tbody = document.getElementById("cards-tbody");

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        let row = document.createElement("tr");

        row.appendChild(createCardRow(card.name));
        row.appendChild(createCardRow(card.power));
        row.appendChild(createCardRow(card.ability));
        row.appendChild(createCardRow(card.type));
        row.appendChild(createCardRow(card.price));
        row.appendChild(createCardRow(card.territory));
        row.appendChild(createCardRow(card.location));
        row.appendChild(createCardRow(card.aquired));

        tbody.appendChild(row);
    }
}

function createCardRow(data) {
    let col = document.createElement("td");
    col.innerText = data;

    return col;
}

// "name": "Geralt of Rivia",
//                 "power": 15,
//                 "ability": "",
//                 "type": "hero",
//                 "price": 50,
//                 "location": "Quest",
//                 "territory": "Novigrad",
//                 "quest": "Gwent: Old Friends",
//                 "aquired": "From Thaler at the Seven Cats Inn"

/* <th>Name</th>
                                <th>Power</th>
                                <th>Ability</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Location</th>
                                <th>Aquisition</th>
                                <th>Details</th> */