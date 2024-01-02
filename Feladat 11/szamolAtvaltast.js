/*

Ebben a példában a szamolAtvaltast függvény bekéri az Euró árfolyamát és azt,
hogy hány eurót szeretnénk átváltani Ft-ba, majd kiszámolja az átváltott összeget.
Az eredményt a kiirAtvaltast függvény jeleníti meg az HTML oldalon.

*/
// Függvény az átváltás kiszámolásához és megjelenítéséhez
function szamolAtvaltast() {
    // Input mezők értékeinek lekérdezése
    var arfolyam = getInputValue("arfolyam");
    var atvaltandoEuro = getInputValue("atvaltandoEuro");
    // Érvényes adatok ellenőrzése
    if (!isNaN(arfolyam) && !isNaN(atvaltandoEuro) && arfolyam > 0 && atvaltandoEuro > 0) {
        // Átváltás kiszámolása
        var atvaltottFt = arfolyam * atvaltandoEuro;
        // Az eredmény megjelenítése a HTML kimeneten
        kiirAtvaltast(atvaltottFt);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirAtvaltast("Kérlek adj meg érvényes adatokat");
    }
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
// Eredmény kiírása a HTML kimeneten
function kiirAtvaltast(atvaltottFt) {
    var atvaltottFtElem = document.getElementById("atvaltottFt");
    if (atvaltottFtElem) {
        // Az eredmény kiírása a HTML kimeneten
        atvaltottFtElem.textContent = typeof atvaltottFt === 'number'
            ? "Az \u00E1tv\u00E1ltott Eur\u00F3 \u00F6sszege: ".concat(atvaltottFt.toFixed(2), " Ft")
            : atvaltottFt.toString();
    }
    else {
        console.error("Az 'atvaltottFt' elem nem található.");
    }
}
