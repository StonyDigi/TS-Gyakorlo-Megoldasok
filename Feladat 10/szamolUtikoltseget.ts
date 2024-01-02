/*

Ebben a példában a szamolUtikoltseget függvény bekéri az autó fogyasztását, a benzin literenkénti árát és a megteendő út hosszát,
majd kiszámolja az útiköltséget. Az eredményt a kiirUtikoltseget függvény jeleníti meg az HTML oldalon.

*/

// Függvény az útiköltség kiszámolásához és megjelenítéséhez
function szamolUtikoltseget() {
    // Input mezők értékeinek lekérdezése
    const fogyasztas = getInputValue("fogyasztas");
    const benzinAr = getInputValue("benzinAr");
    const utHossz = getInputValue("utHossz");

    // Érvényes adatok ellenőrzése
    if (!isNaN(fogyasztas) && !isNaN(benzinAr) && !isNaN(utHossz) && fogyasztas > 0 && benzinAr > 0 && utHossz > 0) {
        // Útiköltség kiszámolása
        const utikoltseg = (fogyasztas * benzinAr * utHossz) / 100;

        // Az eredmény megjelenítése a HTML kimeneten
        kiirUtikoltseget(utikoltseg);
    } else {
        // Hiba esetén hibaüzenet kiírása
        kiirUtikoltseget("Kérlek adj meg érvényes adatokat");
    }
}

// Input mező értékének lekérdezése
function getInputValue(id: string): number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
}

// Eredmény kiírása a HTML kimeneten
function kiirUtikoltseget(utikoltseg: number | string): void {
    const utikoltsegElem = document.getElementById("utikoltseg");

    if (utikoltsegElem) {
        // Az eredmény kiírása a HTML kimeneten
        utikoltsegElem.textContent = typeof utikoltseg === 'number'
            ? `Az útiköltség: ${utikoltseg.toFixed(2)} Ft`
            : utikoltseg.toString();
    } else {
        console.error("Az 'utikoltseg' elem nem található.");
    }
}