/*

Ez a példa bemutatja, hogyan generálhatsz öt különböző számot és jelenítheted meg azokat az HTML oldalon.
A generált számok a 1 és 90 közötti egész számok közül kerülnek kiválasztásra, és minden szám csak egyszer szerepel a nyerőszámok között.

*/
// Függvény az öt különböző szám generálásához
function generalNyeroszamok() {
    var nyeroszamok = [];
    while (nyeroszamok.length < 5) {
        var veletlenSzam = Math.floor(Math.random() * 90) + 1;
        if (!nyeroszamok.includes(veletlenSzam)) {
            nyeroszamok.push(veletlenSzam);
        }
    }
    return nyeroszamok;
}
// Függvény az ötöslottó sorsolás elindításához és az eredmény megjelenítéséhez
function sorsolas() {
    // Az öt különböző szám generálása
    var nyeroszamok = generalNyeroszamok();
    // Az eredmény megjelenítése a HTML kimeneten
    kiirNyeroszamok(nyeroszamok);
}
// Eredmény kiírása a HTML kimeneten
function kiirNyeroszamok(nyeroszamok) {
    var nyeroszamokElem = document.getElementById("nyeroszamok");
    if (nyeroszamokElem) {
        nyeroszamokElem.textContent = "Nyer\u0151sz\u00E1mok: ".concat(nyeroszamok.join(', '));
    }
    else {
        console.error("Az 'nyeroszamok' elem nem található.");
    }
}
