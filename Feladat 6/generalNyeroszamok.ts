/* 

Ez a példa bemutatja, hogyan generálhatsz öt különböző számot és jelenítheted meg azokat az HTML oldalon. 
A generált számok a 1 és 90 közötti egész számok közül kerülnek kiválasztásra, és minden szám csak egyszer szerepel a nyerőszámok között.

*/

// Függvény az öt különböző szám generálásához
function generalNyeroszamok(): number[] {
    const nyeroszamok: number[] = [];

    while (nyeroszamok.length < 5) {
        const veletlenSzam = Math.floor(Math.random() * 90) + 1;
        if (!nyeroszamok.includes(veletlenSzam)) {
            nyeroszamok.push(veletlenSzam);
        }
    }
    return nyeroszamok;
}

// Függvény az ötöslottó sorsolás elindításához és az eredmény megjelenítéséhez
function sorsolas() {
     // Az öt különböző szám generálása
     const nyeroszamok = generalNyeroszamok();
     // Az eredmény megjelenítése a HTML kimeneten
     kiirNyeroszamok(nyeroszamok);
}

// Eredmény kiírása a HTML kimeneten
function kiirNyeroszamok(nyeroszamok: number[]): void {
    const nyeroszamokElem = document.getElementById("nyeroszamok");

    if (nyeroszamokElem) {
        nyeroszamokElem.textContent = `Nyerőszámok: ${nyeroszamok.join(', ')}`;
    } else {
        console.error("Az 'nyeroszamok' elem nem található.");
    }
}