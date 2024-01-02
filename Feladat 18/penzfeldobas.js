/*

Ez a függvény felelős a pénzfeldobás eredményeinek generálásáért.
Háromszor hívja a veletlenszeruFejVagyIras() függvényt, hogy meghatározza, hogy az adott dobás fej vagy írás eredményt hozott.

*/
// Függvény a pénzfeldobás eredményeinek kiírásához
function penzfeldobas() {
    // Pénzfeldobás eredményeinek generálása
    var eredmenyek = [];
    for (var i = 0; i < 3; i++) {
        var fejVagyIras = veletlenszeruFejVagyIras();
        eredmenyek.push(fejVagyIras);
    }
    // Eredmények kiírása
    kiirEredmenyek(eredmenyek);
}
// Függvény a véletlenszerű fej vagy írás generálásához
function veletlenszeruFejVagyIras() {
    var randomSzam = Math.random();
    return randomSzam < 0.5 ? "Fej" : "Írás";
}
// Eredmények kiírása a HTML kimeneten
function kiirEredmenyek(eredmenyek) {
    var eredmenyekElem = document.getElementById("eredmenyek");
    if (eredmenyekElem) {
        // Az eredmények kiírása a HTML kimeneten
        var eredmenyekHtml = eredmenyek.map(function (eredmeny, index) { return "<p>Dob\u00E1s ".concat(index + 1, ": ").concat(eredmeny, "</p>"); }).join('');
        eredmenyekElem.innerHTML = eredmenyekHtml;
    }
    else {
        console.error("Az 'eredmenyek' elem nem található.");
    }
}
