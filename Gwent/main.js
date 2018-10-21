
loadCardData();

function loadCardData() {
    let xhr = new XMLHttpRequest();

    xhr.overrideMimeType("application/json");
    xhr.open("GET", "cards.json", true);
    xhr.onloadend = function() {
        parseCardData(xhr.responseText);
    }

    xhr.send();

}

function parseCardData(data) {
    let json = JSON.parse(data);

    console.log(json);

    parseNeutralCards(json.cards.neutral);
}

function parseNeutralCards(cards) {
    let tbody = document.getElementById("cards-table");

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];

        let row = document.createElement("tr");

        let col_name = document.createElement("td");

        col_name.innerText = card.name;

        row.appendChild(col_name);

        tbody.appendChild(row);
    }
}