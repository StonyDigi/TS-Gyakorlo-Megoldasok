/* 

Ebben a példában a ellenorizPrimszam függvény kiszámolja, hogy a megadott szám prímszám-e, majd az eredményt a felugró ablakban jeleníti meg.
 A prímszám ellenőrzéséhez egy külön metódust is készítettem (primszamEllenorzes). 
 A kód figyelmeztet, ha a felhasználó olyan számot ad meg, ami kisebb vagy egyenlő 1-nél, mert az 1 nem prímszám.

*/

// Fő függvény a prímszám ellenőrzéséhez
function ellenorizPrimszam() {
    // Input mező értékének lekérése
    const szam = getInputValue("szam");

    // Érvényes adatok ellenőrzése
    if (!isNaN(szam) && szam > 1) {
        // Prímszám ellenőrzése és eredmény kiírása
        const eredmeny = primszamEllenorzes(szam);
        eredmenytKiir(`${szam} ${eredmeny ? 'prímszám' : 'nem prímszám'}`)
    } else {
        // Hiba esetén hibaüzenet kiírása
        hibaKiir("Kérlek adj meg egy érvényes számot (nagyobb, mint 1)");
    }
}

// Metódus a prímszám ellenőrzéséhez
function primszamEllenorzes(szam: number): boolean {
    for (let i = 2; i <= Math.sqrt(szam); i++) {
        if (szam % i === 0) {
            return false; // Nem prímszám, mert van osztója más mint 1 és önmaga
        }
    }
    return true; // Prímszám
}

// Input mező értékének lekérdezése
function getInputValue(id: string): number {
    return parseFloat((document.getElementById(id) as HTMLInputElement).value);
}

// Eredmény kiírása felugró ablakban
function eredmenytKiir(uzenet: string): void {
    alert(uzenet);
}

// Hiba kiírása felugró ablakban
function hibaKiir(uzenet: string): void {
    alert(uzenet);
}