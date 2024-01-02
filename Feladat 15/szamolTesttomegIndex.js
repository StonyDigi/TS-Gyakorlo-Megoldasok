/*

Ebben a példában a szamolTesttomegIndex függvény bekéri a felhasználó tömegét és magasságát, majd kiszámolja a testtömeg-indexet.
 Az eredményt a kiirTesttomegIndexEredmeny függvény jeleníti meg az HTML oldalon.

*/
// Függvény a testtömeg-index számolásához
function szamolTesttomegIndex() {
    // Input mezők értékeinek lekérdezése
    var tomeg = getInputValue("tomeg");
    var magassag = getInputValue("magassag");
    // Érvényes adatok ellenőrzése
    if (!isNaN(tomeg) && !isNaN(magassag) && tomeg > 0 && magassag > 0) {
        // Testtömeg-index számolása
        var testtomegIndex = tomeg / Math.pow(magassag / 100, 2);
        // Az eredmény kategóriájának meghatározása
        var kategoria = meghatarozTesttomegIndexKategoria(testtomegIndex);
        // Az eredmény megjelenítése a HTML kimeneten
        kiirTesttomegIndexEredmeny(testtomegIndex, kategoria);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirTesttomegIndexEredmeny("Kérlek adj meg érvényes adatokat", "");
    }
}
// Függvény a testtömeg-index kategória meghatározásához
function meghatarozTesttomegIndexKategoria(testtomegIndex) {
    if (testtomegIndex < 16) {
        return "Súlyos soványság";
    }
    else if (testtomegIndex >= 16 && testtomegIndex <= 16.99) {
        return "Mérsékelt soványság";
    }
    else if (testtomegIndex >= 17 && testtomegIndex <= 18.49) {
        return "Enyhe soványság";
    }
    else if (testtomegIndex >= 18.5 && testtomegIndex <= 24.99) {
        return "Normális testsúly";
    }
    else if (testtomegIndex >= 25 && testtomegIndex <= 29.99) {
        return "Túlsúlyos";
    }
    else if (testtomegIndex >= 30 && testtomegIndex <= 34.99) {
        return "I. fokú elhízás";
    }
    else if (testtomegIndex >= 35 && testtomegIndex <= 39.99) {
        return "II. fokú elhízás";
    }
    else {
        return "III. fokú (súlyos) elhízás";
    }
}
// Eredmény kiírása a HTML kimeneten
function kiirTesttomegIndexEredmeny(testtomegIndex, kategoria) {
    var testtomegIndexElem = document.getElementById("testtomegIndexEredmeny");
    if (testtomegIndexElem) {
        // Az eredmény kiírása a HTML kimeneten
        if (typeof testtomegIndex === 'number') {
            testtomegIndexElem.innerHTML = "A testt\u00F6meg-indexed: ".concat(testtomegIndex.toFixed(2), "<br>");
            testtomegIndexElem.innerHTML += "Kateg\u00F3ria: ".concat(kategoria);
        }
        else {
            testtomegIndexElem.textContent = testtomegIndex.toString();
        }
    }
    else {
        console.error("Az 'testtomegIndexEredmeny' elem nem található.");
    }
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}
