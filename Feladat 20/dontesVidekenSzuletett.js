/*

Ebben a példában a felhasználó megadhatja a születési helyét, majd a "Döntés" gombra kattintva az alkalmazás eldönti,
hogy vidéken vagy a fővárosban született-e a felhasználó. Az eredményt a felhasználónak jeleníti meg.

*/
// Függvény a döntéshez, hogy vidéken vagy a fővárosban született
function dontesVidekenSzuletett() {
    // Beolvasás az űrlapról
    var szuletesiHelyInput = document.getElementById("szuletesiHelyInput");
    var szuletesiHely = szuletesiHelyInput.value.trim().toLowerCase();
    // Döntés a születési hely alapján
    var eredmeny = szuletettHol(szuletesiHely);
    // Eredmény kiírása
    kiirSzuletettHolEredmeny(eredmeny);
}
// Függvény a döntéshez, hogy vidéken vagy a fővárosban született
function szuletettHol(szuletesiHely) {
    // A fővárosok listája (példa)
    var fovaros = ["budapest"];
    // A születési hely ellenőrzése
    if (fovaros.includes(szuletesiHely)) {
        return "Fővárosban születtél!";
    }
    else {
        return "Vidéken születtél!";
    }
}
// Eredmény kiírása a HTML kimeneten
function kiirSzuletettHolEredmeny(eredmeny) {
    var szuletettHolEredmenyElem = document.getElementById("szuletettHolEredmeny");
    if (szuletettHolEredmenyElem) {
        // Az eredmény kiírása a HTML kimeneten
        szuletettHolEredmenyElem.innerHTML = "<p>".concat(eredmeny, "</p>");
    }
    else {
        console.error("Az 'szuletettHolEredmeny' elem nem található.");
    }
}
