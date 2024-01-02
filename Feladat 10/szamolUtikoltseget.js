/*

Ebben a példában a szamolUtikoltseget függvény bekéri az autó fogyasztását, a benzin literenkénti árát és a megteendő út hosszát,
majd kiszámolja az útiköltséget. Az eredményt a kiirUtikoltseget függvény jeleníti meg az HTML oldalon.

*/
// Függvény az útiköltség kiszámolásához és megjelenítéséhez
function szamolUtikoltseget() {
    // Input mezők értékeinek lekérdezése
    var fogyasztas = getInputValue("fogyasztas");
    var benzinAr = getInputValue("benzinAr");
    var utHossz = getInputValue("utHossz");
    // Érvényes adatok ellenőrzése
    if (!isNaN(fogyasztas) && !isNaN(benzinAr) && !isNaN(utHossz) && fogyasztas > 0 && benzinAr > 0 && utHossz > 0) {
        // Útiköltség kiszámolása
        var utikoltseg = (fogyasztas * benzinAr * utHossz) / 100;
        // Az eredmény megjelenítése a HTML kimeneten
        kiirUtikoltseget(utikoltseg);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirUtikoltseget("Kérlek adj meg érvényes adatokat");
    }
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
// Eredmény kiírása a HTML kimeneten
function kiirUtikoltseget(utikoltseg) {
    var utikoltsegElem = document.getElementById("utikoltseg");
    if (utikoltsegElem) {
        // Az eredmény kiírása a HTML kimeneten
        utikoltsegElem.textContent = typeof utikoltseg === 'number'
            ? "Az \u00FAtik\u00F6lts\u00E9g: ".concat(utikoltseg.toFixed(2), " Ft")
            : utikoltseg.toString();
    }
    else {
        console.error("Az 'utikoltseg' elem nem található.");
    }
}
