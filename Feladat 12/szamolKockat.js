/*

Ebben a példában a szamolKockat függvény bekéri a kocka élhosszát, majd kiszámolja a kocka felszínét és térfogatát.
Az eredményt a kiirKockaEredmenyeket függvény jeleníti meg az HTML oldalon.

*/
// Függvény a kocka felszínének és térfogatának kiszámolásához és megjelenítéséhez
function szamolKockat() {
    // Input mező értékének lekérdezése
    var elhossz = getInputValue("elhossz");
    // Érvényes adatok ellenőrzése
    if (!isNaN(elhossz) && elhossz > 0) {
        // Kocka felszínének és térfogatának kiszámolása
        var kockaFelszin = 6 * elhossz * elhossz;
        var kockaTerfogat = elhossz * elhossz * elhossz;
        // Az eredmény megjelenítése a HTML kimeneten
        kiirKockaEredmenyeket(kockaFelszin, kockaTerfogat);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirKockaEredmenyeket("Kérlek adj meg érvényes adatokat", "Kérlek adj meg érvényes adatokat");
    }
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
// Eredmény kiírása a HTML kimeneten
function kiirKockaEredmenyeket(kockaFelszin, kockaTerfogat) {
    var kockaFelszinElem = document.getElementById("kockaFelszin");
    var kockaTerfogatElem = document.getElementById("kockaTerfogat");
    if (kockaFelszinElem && kockaTerfogatElem) {
        // Az eredmény kiírása a HTML kimeneten
        kockaFelszinElem.textContent = typeof kockaFelszin === 'number'
            ? "A kocka felsz\u00EDne: ".concat(kockaFelszin.toFixed(2), " egys\u00E9g^2")
            : kockaFelszin.toString();
        kockaTerfogatElem.textContent = typeof kockaTerfogat === 'number'
            ? "A kocka t\u00E9rfogata: ".concat(kockaTerfogat.toFixed(2), " egys\u00E9g^3")
            : kockaTerfogat.toString();
    }
    else {
        console.error("Az 'kockaFelszin' vagy 'kockaTerfogat' elem nem található.");
    }
}
