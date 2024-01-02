/*

Ebben a példában a ellenorizPalindrom függvény a felhasználó által megadott szöveget ellenőrzi,
hogy palindrom-e, majd az eredményt a HTML kimeneten jeleníti meg. A palindromEllenorzes függvény tisztítja a szöveget és ellenőrzi,
hogy a tisztított szöveg visszafelé olvasva ugyanaz-e. Az eredményt a <p id="eredmeny"> elembe írja.

*/
// Fő függvény a palindrom ellenőrzéséhez
function ellenorizPalindrom() {
    // Input mező értékének lekérése
    var szoveg = getInputValue("szoveg");
    // Érvényes adatok ellenőrzése
    if (szoveg.trim() !== "") {
        // Palindrom ellenőrzése és eredmény kiírása a HTML kimeneten
        var eredmeny = palindromEllenorzes(szoveg);
        kiirEredmenyt(eredmeny);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirEredmenyt("Kérlek adj meg egy érvényes szöveget");
    }
}
// Metódus a palindrom ellenőrzéséhez
function palindromEllenorzes(szoveg) {
    // Szöveg tisztítása és kisbetűvé alakítása
    var tisztitottSzoveg = szoveg.toLowerCase().replace(/[^a-z]/g, '');
    // Palindrom ellenőrzése
    var forditott = tisztitottSzoveg.split('').reverse().join('');
    return tisztitottSzoveg === forditott;
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return document.getElementById(id).value;
}
// Eredmény kiírása a HTML kimeneten
function kiirEredmenyt(eredmeny) {
    var eredmenyElem = document.getElementById("eredmeny");
    if (eredmenyElem) {
        eredmenyElem.classList.remove("text-success", "text-danger");
        if (typeof eredmeny === "boolean") {
            eredmenyElem.classList.add(eredmeny ? "text-success" : "text-danger");
            eredmenyElem.textContent = eredmeny ? "Palindrom" : "Nem palindrom";
        }
        else {
            console.error("Érvénytelen eredmény típus: ", typeof eredmeny);
        }
    }
    else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}
