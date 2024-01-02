/*

Ebben a kódban a szamolAtfogot függvény bekéri a két befogót, ellenőrzi, hogy érvényes értékeket kaptál-e,
majd kiszámolja az átfogót a Pitagorasz-tétel szerint és megjeleníti az eredményt az HTML oldalon.
Az átfogó értékét a toFixed(2) metódussal két tizedesjegyre kerekíti.

*/
// Függvény az átfogó kiszámolásához és megjelenítéséhez
function szamolAtfogot() {
    // Input mezők értékeinek lekérdezése
    var befogo1 = getInputValue("befogo1");
    var befogo2 = getInputValue("befogo2");
    // Érvényes adatok ellenőrzése
    if (!isNaN(befogo1) && !isNaN(befogo2) && befogo1 > 0 && befogo2 > 0) {
        // Átfogó kiszámolása a Pitagorasz-tétel szerint
        var atfogo = Math.sqrt(Math.pow(befogo1, 2) + Math.pow(befogo2, 2));
        // Az eredmény megjelenítése a HTML kimeneten
        kiirAtfogot(atfogo);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirAtfogot("Kérlek adj meg érvényes befogókat");
    }
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
// Eredmény kiírása a HTML kimeneten
function kiirAtfogot(atfogo) {
    var atfogoElem = document.getElementById("atfogo");
    if (atfogoElem) {
        // Az eredmény kiírása a HTML kimeneten
        atfogoElem.textContent = typeof atfogo === 'number'
            ? "Az \u00E1tfog\u00F3 hossza: ".concat(atfogo.toFixed(2))
            : atfogo.toString();
    }
    else {
        console.error("Az 'atfogo' elem nem található.");
    }
}
