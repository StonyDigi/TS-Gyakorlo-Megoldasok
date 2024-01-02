/*

Ebben a példában a ellenorizOszthatosag függvény eldönti, hogy két szám (szam1 és szam2) osztható-e egymással maradék nélkül. 
A példa azt mutatja be, hogyan lehet meghívni a függvényt két konkrét számmal, majd kiírni az eredményt a konzolon.

*/

// Függvény a két szám oszthatóságának ellenőrzésére
function ellenorizOszthatosag() {
    // Input mezők értékeinek lekérdezése
    const szam1 = getInputValue("szam1");
    const szam2 = getInputValue("szam2");

    // Érvényes adatok ellenőrzése
    if (!isNaN(szam1) && !isNaN(szam2)) {
        // Maradék nélküli oszthatóság ellenőrzése
        const eredmeny = szam1 % szam2 === 0 || szam2 % szam1 === 0;

        // Eredmény kiírása a HTML kimeneten
        kiirEredmenyt(eredmeny);
    } else {
        // Hiba esetén hibaüzenet kiírása
        kiirEredmenyt("Kérlek adj meg érvényes számokat");
    }
}

// Input mező értékének lekérdezése
function getInputValue(id: string): number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
}

// Eredmény kiírása a HTML kimeneten
function kiirEredmenyt(eredmeny: boolean | string): void {
    const eredmenyElem = document.getElementById("eredmeny");

    if (eredmenyElem) {
        // Az eredményt stringgé konvertáljuk, mielőtt beállítanánk a textContent-et
        const eredmenySzoveg = typeof eredmeny === 'boolean' 
            ? eredmeny
                ? "Az első(szám1) és második (szám2) oszthatók egymással maradék nélkül."
                : "Az első és második szám nem oszthatók egymással maradék nélkül."
            : eredmeny.toString();

        eredmenyElem.textContent = eredmenySzoveg;
    } else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}