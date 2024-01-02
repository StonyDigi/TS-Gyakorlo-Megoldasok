/*

Ebben a példában a ellenorizPalindrom függvény a felhasználó által megadott szöveget ellenőrzi,
hogy palindrom-e, majd az eredményt a HTML kimeneten jeleníti meg. A palindromEllenorzes függvény tisztítja a szöveget és ellenőrzi,
hogy a tisztított szöveg visszafelé olvasva ugyanaz-e. Az eredményt a <p id="eredmeny"> elembe írja.

*/

// Fő függvény a palindrom ellenőrzéséhez
function ellenorizPalindrom() {
    // Input mező értékének lekérése
    const szoveg = getInputValue("szoveg");

    // Érvényes adatok ellenőrzése
    if (szoveg.trim() !== "") {
        // Palindrom ellenőrzése és eredmény kiírása a HTML kimeneten
        const eredmeny = palindromEllenorzes(szoveg);
        kiirEredmenyt(eredmeny);
    } else {
        // Hiba esetén hibaüzenet kiírása
        kiirEredmenyt("Kérlek adj meg egy érvényes szöveget");
    }
}

// Metódus a palindrom ellenőrzéséhez
function palindromEllenorzes(szoveg: string): boolean {
    // Szöveg tisztítása és kisbetűvé alakítása
    const tisztitottSzoveg = szoveg.toLowerCase().replace(/[^a-z]/g, '');

    // Palindrom ellenőrzése
    const forditott = tisztitottSzoveg.split('').reverse().join('');
    return tisztitottSzoveg === forditott;
}

// Input mező értékének lekérdezése
function getInputValue(id: string): string {
    return (document.getElementById(id) as HTMLInputElement).value;
}

// Eredmény kiírása a HTML kimeneten
function kiirEredmenyt(eredmeny: boolean | string): void {
    const eredmenyElem = document.getElementById("eredmeny");

    if (eredmenyElem) {
        eredmenyElem.classList.remove("text-success", "text-danger");

        if (typeof eredmeny === "boolean") {
            eredmenyElem.classList.add(eredmeny ? "text-success" : "text-danger");
            eredmenyElem.textContent = eredmeny ? "Palindrom" : "Nem palindrom";
        } else {
            console.error("Érvénytelen eredmény típus: ", typeof eredmeny);
        }
    } else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}