// Fő függvény a bruttó ár kiszámolásához
function szamolBruttoAr() {
    // Input mezők értékeinek lekérése
    var termekAr = getInputValue("termekAr");
    var afaErtek = getInputValue("afaErtek");
    // Érvényes adatok ellenőrzése
    if (!isNaN(termekAr) && !isNaN(afaErtek) && afaErtek >= 0) {
        // Bruttó ár kiszámolása és eredmény kiírása
        var bruttoAr = szamolBruttoArFuggveny(termekAr, afaErtek);
        eredmenytKiir("Brutt\u00F3 \u00C1r: ".concat(bruttoAr, " Ft"));
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        hibaKiir("Kérlek érvényes számokat adj meg");
    }
}
// Függvény a bruttó ár kiszámolásához
function szamolBruttoArFuggveny(ar, afa) {
    return ar + (ar * afa / 100);
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
// Eredmény kiírása felugró ablakban
function eredmenytKiir(uzenet) {
    alert(uzenet);
}
// Hiba kiírása felugró ablakban
function hibaKiir(uzenet) {
    alert(uzenet);
}
