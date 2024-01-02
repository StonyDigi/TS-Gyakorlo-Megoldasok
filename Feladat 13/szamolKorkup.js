/*

Ebben a példában a szamolKorkup függvény bekéri a körkúp sugarát és magasságát, majd kiszámolja a körkúp térfogatát és felszínét.
Az eredményt a kiirKorkupEredmenyeket függvény jeleníti meg az HTML oldalon.

*/
// Függvény a körkúp térfogatának és felszínének kiszámolásához és megjelenítéséhez
function szamolKorkup() {
    // Input mezők értékeinek lekérdezése
    var sugar = getInputValue("sugar");
    var magassag = getInputValue("magassag");
    // Érvényes adatok ellenőrzése
    if (!isNaN(sugar) && !isNaN(magassag) && sugar > 0 && magassag > 0) {
        // Körkúp térfogatának és felszínének kiszámolása
        var korkupTerfogat = (1 / 3) * Math.PI * sugar * sugar * magassag;
        var korkupFelszin = Math.PI * sugar * (sugar + Math.sqrt(sugar * sugar + magassag * magassag));
        // Az eredmény megjelenítése a HTML kimeneten
        kiirKorkupEredmenyeket(korkupTerfogat, korkupFelszin);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirKorkupEredmenyeket("Kérlek adj meg érvényes adatokat", "Kérlek adj meg érvényes adatokat");
    }
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
// Eredmény kiírása a HTML kimeneten
function kiirKorkupEredmenyeket(korkupTerfogat, korkupFelszin) {
    var korkupTerfogatElem = document.getElementById("korkupTerfogat");
    var korkupFelszinElem = document.getElementById("korkupFelszin");
    if (korkupTerfogatElem && korkupFelszinElem) {
        // Az eredmény kiírása a HTML kimeneten
        korkupTerfogatElem.textContent = typeof korkupTerfogat === 'number'
            ? "A k\u00F6rk\u00FAp t\u00E9rfogata: ".concat(korkupTerfogat.toFixed(2), " egys\u00E9g^3")
            : korkupTerfogat.toString();
        korkupFelszinElem.textContent = typeof korkupFelszin === 'number'
            ? "A k\u00F6rk\u00FAp felsz\u00EDne: ".concat(korkupFelszin.toFixed(2), " egys\u00E9g^2")
            : korkupFelszin.toString();
    }
    else {
        console.error("Az 'korkupTerfogat' vagy 'korkupFelszin' elem nem található.");
    }
}
