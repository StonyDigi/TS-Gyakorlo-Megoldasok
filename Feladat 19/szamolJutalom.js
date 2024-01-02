/*

Ez az alkalmazás lehetővé teszi a felhasználó számára, hogy megadja a napi bevételt, majd kiszámolja és megjeleníti
a pénztáros jutalmát a 5%-os arány alapján. A kiszámolt jutalom értéke egész értékre van kerekítve, és az eredményt a felhasználónak jeleníti meg.

*/
// Függvény a jutalom kiszámolásához
function szamolJutalom() {
    // Beolvasás az űrlapról
    var napiBevetelInput = document.getElementById("napiBevetelInput");
    var napiBevetel = parseFloat(napiBevetelInput.value) || 0;
    // Jutalom kiszámolása
    var jutalom = kalkulalJutalom(napiBevetel);
    // Jutalom kiírása
    kiirJutalomEredmeny(jutalom);
}
// Függvény a jutalom kiszámolásához
function kalkulalJutalom(napiBevetel) {
    // Jutalom 5% -a, egész értékre kerekítve
    var jutalom = Math.round(napiBevetel * 0.05);
    return jutalom;
}
// Jutalom kiírása a HTML kimeneten
function kiirJutalomEredmeny(jutalom) {
    var jutalomEredmenyElem = document.getElementById("jutalomEredmeny");
    if (jutalomEredmenyElem) {
        // A jutalom kiírása a HTML kimeneten
        jutalomEredmenyElem.innerHTML = "<p>A p\u00E9nzt\u00E1ros jutalma: ".concat(jutalom, " Ft</p>");
    }
    else {
        console.error("Az 'jutalomEredmeny' elem nem található.");
    }
}
