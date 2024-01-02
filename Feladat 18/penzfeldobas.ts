/*

Ez a függvény felelős a pénzfeldobás eredményeinek generálásáért. 
Háromszor hívja a veletlenszeruFejVagyIras() függvényt, hogy meghatározza, hogy az adott dobás fej vagy írás eredményt hozott.

*/

// Függvény a pénzfeldobás eredményeinek kiírásához
function penzfeldobas() {
    // Pénzfeldobás eredményeinek generálása
    const eredmenyek: string[] = [];

    for (let i = 0; i < 3; i++) {
        const fejVagyIras = veletlenszeruFejVagyIras();
        eredmenyek.push(fejVagyIras);
    }

    // Eredmények kiírása
    kiirEredmenyek(eredmenyek);
}

// Függvény a véletlenszerű fej vagy írás generálásához
function veletlenszeruFejVagyIras(): string {
    const randomSzam = Math.random();
    return randomSzam < 0.5 ? "Fej" : "Írás";
}

// Eredmények kiírása a HTML kimeneten
function kiirEredmenyek(eredmenyek: string[]): void {
    const eredmenyekElem = document.getElementById("eredmenyek");

    if (eredmenyekElem) {
        // Az eredmények kiírása a HTML kimeneten
        const eredmenyekHtml = eredmenyek.map((eredmeny, index) => `<p>Dobás ${index + 1}: ${eredmeny}</p>`).join('');
        eredmenyekElem.innerHTML = eredmenyekHtml;
    } else {
        console.error("Az 'eredmenyek' elem nem található.");
    }
}
