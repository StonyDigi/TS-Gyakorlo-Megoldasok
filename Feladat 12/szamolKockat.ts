/*

Ebben a példában a szamolKockat függvény bekéri a kocka élhosszát, majd kiszámolja a kocka felszínét és térfogatát. 
Az eredményt a kiirKockaEredmenyeket függvény jeleníti meg az HTML oldalon.

*/

// Függvény a kocka felszínének és térfogatának kiszámolásához és megjelenítéséhez
function szamolKockat() {
    // Input mező értékének lekérdezése
    const elhossz = getInputValue("elhossz");

    // Érvényes adatok ellenőrzése
    if (!isNaN(elhossz) && elhossz > 0) {
        // Kocka felszínének és térfogatának kiszámolása
        const kockaFelszin = 6 * elhossz * elhossz;
        const kockaTerfogat = elhossz * elhossz * elhossz;

        // Az eredmény megjelenítése a HTML kimeneten
        kiirKockaEredmenyeket(kockaFelszin, kockaTerfogat);
    } else {
        // Hiba esetén hibaüzenet kiírása
        kiirKockaEredmenyeket("Kérlek adj meg érvényes adatokat", "Kérlek adj meg érvényes adatokat");
    }
}

// Input mező értékének lekérdezése
function getInputValue(id: string): number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
}

// Eredmény kiírása a HTML kimeneten
function kiirKockaEredmenyeket(kockaFelszin: number | string, kockaTerfogat: number | string): void {
    const kockaFelszinElem = document.getElementById("kockaFelszin");
    const kockaTerfogatElem = document.getElementById("kockaTerfogat");

    if (kockaFelszinElem && kockaTerfogatElem) {
        // Az eredmény kiírása a HTML kimeneten
        kockaFelszinElem.textContent = typeof kockaFelszin === 'number'
            ? `A kocka felszíne: ${kockaFelszin.toFixed(2)} egység^2`
            : kockaFelszin.toString();

        kockaTerfogatElem.textContent = typeof kockaTerfogat === 'number'
            ? `A kocka térfogata: ${kockaTerfogat.toFixed(2)} egység^3`
            : kockaTerfogat.toString();
    } else {
        console.error("Az 'kockaFelszin' vagy 'kockaTerfogat' elem nem található.");
    }
}