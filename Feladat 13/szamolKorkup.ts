/*

Ebben a példában a szamolKorkup függvény bekéri a körkúp sugarát és magasságát, majd kiszámolja a körkúp térfogatát és felszínét. 
Az eredményt a kiirKorkupEredmenyeket függvény jeleníti meg az HTML oldalon.

*/

// Függvény a körkúp térfogatának és felszínének kiszámolásához és megjelenítéséhez
function szamolKorkup() {
    // Input mezők értékeinek lekérdezése
    const sugar = getInputValue("sugar");
    const magassag = getInputValue("magassag");

    // Érvényes adatok ellenőrzése
    if (!isNaN(sugar) && !isNaN(magassag) && sugar > 0 && magassag > 0) {
        // Körkúp térfogatának és felszínének kiszámolása
        const korkupTerfogat = (1 / 3) * Math.PI * sugar * sugar * magassag;
        const korkupFelszin = Math.PI * sugar * (sugar + Math.sqrt(sugar * sugar + magassag * magassag));

        // Az eredmény megjelenítése a HTML kimeneten
        kiirKorkupEredmenyeket(korkupTerfogat, korkupFelszin);
    } else {
        // Hiba esetén hibaüzenet kiírása
        kiirKorkupEredmenyeket("Kérlek adj meg érvényes adatokat", "Kérlek adj meg érvényes adatokat");
    }
}

// Input mező értékének lekérdezése
function getInputValue(id: string): number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
}

// Eredmény kiírása a HTML kimeneten
function kiirKorkupEredmenyeket(korkupTerfogat: number | string, korkupFelszin: number | string): void {
    const korkupTerfogatElem = document.getElementById("korkupTerfogat");
    const korkupFelszinElem = document.getElementById("korkupFelszin");

    if (korkupTerfogatElem && korkupFelszinElem) {
        // Az eredmény kiírása a HTML kimeneten
        korkupTerfogatElem.textContent = typeof korkupTerfogat === 'number'
            ? `A körkúp térfogata: ${korkupTerfogat.toFixed(2)} egység^3`
            : korkupTerfogat.toString();

        korkupFelszinElem.textContent = typeof korkupFelszin === 'number'
            ? `A körkúp felszíne: ${korkupFelszin.toFixed(2)} egység^2`
            : korkupFelszin.toString();
    } else {
        console.error("Az 'korkupTerfogat' vagy 'korkupFelszin' elem nem található.");
    }
}