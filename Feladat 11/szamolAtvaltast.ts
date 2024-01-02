/*

Ebben a példában a szamolAtvaltast függvény bekéri az Euró árfolyamát és azt, 
hogy hány eurót szeretnénk átváltani Ft-ba, majd kiszámolja az átváltott összeget. 
Az eredményt a kiirAtvaltast függvény jeleníti meg az HTML oldalon.

*/

// Függvény az átváltás kiszámolásához és megjelenítéséhez
function szamolAtvaltast() {
    // Input mezők értékeinek lekérdezése
    const arfolyam = getInputValue("arfolyam");
    const atvaltandoEuro = getInputValue("atvaltandoEuro");

    // Érvényes adatok ellenőrzése
    if (!isNaN(arfolyam) && !isNaN(atvaltandoEuro) && arfolyam > 0 && atvaltandoEuro > 0) {
        // Átváltás kiszámolása
        const atvaltottFt = arfolyam * atvaltandoEuro;

        // Az eredmény megjelenítése a HTML kimeneten
        kiirAtvaltast(atvaltottFt);
    } else {
        // Hiba esetén hibaüzenet kiírása
        kiirAtvaltast("Kérlek adj meg érvényes adatokat");
    }
}

// Input mező értékének lekérdezése
function getInputValue(id: string): number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
}

// Eredmény kiírása a HTML kimeneten
function kiirAtvaltast(atvaltottFt: number | string): void {
    const atvaltottFtElem = document.getElementById("atvaltottFt");

    if (atvaltottFtElem) {
        // Az eredmény kiírása a HTML kimeneten
        atvaltottFtElem.textContent = typeof atvaltottFt === 'number'
            ? `Az átváltott Euró összege: ${atvaltottFt.toFixed(2)} Ft`
            : atvaltottFt.toString();
    } else {
        console.error("Az 'atvaltottFt' elem nem található.");
    }
}