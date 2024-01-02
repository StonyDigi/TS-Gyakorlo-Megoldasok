/*

Ebben a példában a generalEvnyiSzamok függvény egy évnyi (52 hét) hatoslottó számokat generál és a kiirEvnyiSzamok függvény jeleníti meg az eredményt
 a HTML oldalon. A számok a 1 és 45 közötti egész számok, és minden szám csak egyszer szerepel a heti számok között.

*/

// Függvény a hatoslottó számok generálásához egy évben
function generalEvnyiSzamok(): number[][] {
    const evnyiSzamok: number[][] = [];

    for (let het = 1; het <= 52; het++) {
        const hetiSzamok: number[] = [];
        
        while (hetiSzamok.length < 6) {
            const veletlenSzam = Math.floor(Math.random() * 45) + 1; // 1 és 45 közötti számok
            if (!hetiSzamok.includes(veletlenSzam)) {
                hetiSzamok.push(veletlenSzam);
            }
        }

        hetiSzamok.sort((a, b) => a - b); // Számok sorbarendezése
        evnyiSzamok.push(hetiSzamok);
    }

    return evnyiSzamok;
}

// Függvény a hatoslottó sorsolás elindításához és az eredmény megjelenítéséhez
function sorsolas() {
    // Az egy évnyi hatoslottó számok generálása
    const evnyiSzamok = generalEvnyiSzamok();

    // Az eredmény megjelenítése a HTML kimeneten
    kiirEvnyiSzamok(evnyiSzamok);
}

// Eredmény kiírása a HTML kimeneten
function kiirEvnyiSzamok(evnyiSzamok: number[][]): void {
    const evnyiSzamokElem = document.getElementById("evnyiSzamok");

    if (evnyiSzamokElem) {
        let eredmenySzoveg = "Az egy évnyi hatoslottó számok:\n";

        for (let het = 0; het < evnyiSzamok.length; het++) {
            eredmenySzoveg += `Hét ${het + 1}: ${evnyiSzamok[het].join(', ')}\n`;
        }

        evnyiSzamokElem.textContent = eredmenySzoveg;
    } else {
        console.error("Az 'evnyiSzamok' elem nem található.");
    }
}