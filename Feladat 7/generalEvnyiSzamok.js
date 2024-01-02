/*

Ebben a példában a generalEvnyiSzamok függvény egy évnyi (52 hét) hatoslottó számokat generál és a kiirEvnyiSzamok függvény jeleníti meg az eredményt
 a HTML oldalon. A számok a 1 és 45 közötti egész számok, és minden szám csak egyszer szerepel a heti számok között.

*/
// Függvény a hatoslottó számok generálásához egy évben
function generalEvnyiSzamok() {
    var evnyiSzamok = [];
    for (var het = 1; het <= 52; het++) {
        var hetiSzamok = [];
        while (hetiSzamok.length < 6) {
            var veletlenSzam = Math.floor(Math.random() * 45) + 1; // 1 és 45 közötti számok
            if (!hetiSzamok.includes(veletlenSzam)) {
                hetiSzamok.push(veletlenSzam);
            }
        }
        hetiSzamok.sort(function (a, b) { return a - b; }); // Számok sorbarendezése
        evnyiSzamok.push(hetiSzamok);
    }
    return evnyiSzamok;
}
// Függvény a hatoslottó sorsolás elindításához és az eredmény megjelenítéséhez
function sorsolas() {
    // Az egy évnyi hatoslottó számok generálása
    var evnyiSzamok = generalEvnyiSzamok();
    // Az eredmény megjelenítése a HTML kimeneten
    kiirEvnyiSzamok(evnyiSzamok);
}
// Eredmény kiírása a HTML kimeneten
function kiirEvnyiSzamok(evnyiSzamok) {
    var evnyiSzamokElem = document.getElementById("evnyiSzamok");
    if (evnyiSzamokElem) {
        var eredmenySzoveg = "Az egy évnyi hatoslottó számok:\n";
        for (var het = 0; het < evnyiSzamok.length; het++) {
            eredmenySzoveg += "H\u00E9t ".concat(het + 1, ": ").concat(evnyiSzamok[het].join(', '), "\n");
        }
        evnyiSzamokElem.textContent = eredmenySzoveg;
    }
    else {
        console.error("Az 'evnyiSzamok' elem nem található.");
    }
}
