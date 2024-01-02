/*

Ebben a példában a szamolBruttoAr függvény számolja ki a bruttó árat a megadott nettó ár és ÁFA érték alapján, 
majd egy felugró ablakban jeleníti meg az eredményt. A szamolBruttoArFuggveny külön függvényben történik a számolás, 
így könnyen újrahasznosítható és tesztelhető.


*/

// Fő függvény a bruttó ár kiszámolásához
function szamolBruttoAr() {
    // Input mezők értékeinek lekérése
    const termekAr = getInputValue("termekAr");
    const afaErtek = getInputValue("afaErtek");

    // Érvényes adatok ellenőrzése
    if (!isNaN(termekAr) && !isNaN(afaErtek) && afaErtek >= 0) {
        // Bruttó ár kiszámolása és eredmény kiírása
        const bruttoAr = szamolBruttoArFuggveny(termekAr, afaErtek);
        eredmenytKiir(`Bruttó Ár: ${bruttoAr} Ft`);
    } else {
        // Hiba esetén hibaüzenet kiírása
        hibaKiir("Kérlek érvényes számokat adj meg");
    }
}

// Függvény a bruttó ár kiszámolásához
function szamolBruttoArFuggveny(ar: number, afa: number): number {
    return ar + (ar * afa / 100);
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
