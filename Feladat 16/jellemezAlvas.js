/*

Ebben a példában a jellemezAlvas függvény jellemezi az alvásidejét az előre meghatározott tartományok alapján, majd kiírja a konzolra az eredményt.
A felhasználótól bekért értéket ellenőrizzük, hogy érvényes szám-e, és csak azután hajtjuk végre az alvási idő jellemezését és kiírását.

*/
// Függvény az alvásidejének jellemezéséhez
function jellemezAlvas() {
    // Alvási idő beolvasása a felhasználótól
    var alvasIdoInput = document.getElementById("alvasIdoInput");
    var alvasIdo = parseInt(alvasIdoInput.value) || 0;
    // Érvényes adatok ellenőrzése
    if (!isNaN(alvasIdo) && alvasIdo >= 0) {
        // Alvási idő jellemezése
        var jellezes = jellemezAlvasLogika(alvasIdo);
        // Az eredmény kiírása a HTML kimeneten
        kiirEredmeny(jellezes);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirEredmeny("Kérlek adj meg érvényes alvási időt!");
    }
}
// Függvény az alvásidejének jellemezéséhez
function jellemezAlvasLogika(alvasIdo) {
    if (alvasIdo >= 0 && alvasIdo <= 6) {
        return "Kevés";
    }
    else if (alvasIdo >= 7 && alvasIdo <= 9) {
        return "Átlagos";
    }
    else if (alvasIdo >= 10 && alvasIdo <= 12) {
        return "Sok";
    }
    else if (alvasIdo >= 13 && alvasIdo <= 24) {
        return "Nagyon sok";
    }
    else {
        return "Érvénytelen alvási idő";
    }
}
// Eredmény kiírása a HTML kimeneten
function kiirEredmeny(eredmeny) {
    var eredmenyElem = document.getElementById("eredmeny");
    if (eredmenyElem) {
        // Az eredmény kiírása a HTML kimeneten
        eredmenyElem.innerHTML = "<p>".concat(eredmeny, "</p>");
    }
    else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}
