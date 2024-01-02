/*

Ez az alkalmazás lehetővé teszi a felhasználó számára, hogy megadja a napi bevételt, majd kiszámolja és megjeleníti 
a pénztáros jutalmát a 5%-os arány alapján. A kiszámolt jutalom értéke egész értékre van kerekítve, és az eredményt a felhasználónak jeleníti meg.

*/

// Függvény a jutalom kiszámolásához
function szamolJutalom() {
    // Beolvasás az űrlapról
    const napiBevetelInput = document.getElementById("napiBevetelInput") as HTMLInputElement;
    const napiBevetel = parseFloat(napiBevetelInput.value) || 0;

    // Jutalom kiszámolása
    const jutalom = kalkulalJutalom(napiBevetel);

    // Jutalom kiírása
    kiirJutalomEredmeny(jutalom);
}

// Függvény a jutalom kiszámolásához
function kalkulalJutalom(napiBevetel: number): number {
    // Jutalom 5% -a, egész értékre kerekítve
    const jutalom = Math.round(napiBevetel * 0.05);
    return jutalom;
}

// Jutalom kiírása a HTML kimeneten
function kiirJutalomEredmeny(jutalom: number): void {
    const jutalomEredmenyElem = document.getElementById("jutalomEredmeny");

    if (jutalomEredmenyElem) {
        // A jutalom kiírása a HTML kimeneten
        jutalomEredmenyElem.innerHTML = `<p>A pénztáros jutalma: ${jutalom} Ft</p>`;
    } else {
        console.error("Az 'jutalomEredmeny' elem nem található.");
    }
}