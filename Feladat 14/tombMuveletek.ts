/*

Ebben a példában a tombFeltolt függvény létrehoz egy véletlen tömböt a felhasználó által megadott paraméterek alapján.
 Az eljárások és függvények a kért feladatokat oldják meg, és az eredményeket a HTML kimeneten jelenítik meg.

*/

// Függvény a tömb feltöltéséhez
function tombFeltolt(): number[] {
    const elemszam = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // 5-20 közötti véletlen elemszám
    const alsoHatar = parseInt(prompt("Adja meg a véletlen számok alsó határát:")) || 0;
    const felsoHatar = parseInt(prompt("Adja meg a véletlen számok felső határát:")) || 100;

    const tomb: number[] = [];
    for (let i = 0; i < elemszam; i++) {
        const veletlenSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
        tomb.push(veletlenSzam);
    }

    return tomb;
}

// Eljárás a tömb elemeinek kiírásához
function kiirTomb(tomb: number[]): void {
    const megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        megoldasokElem.innerHTML += "a. Tömb elemei: " + tomb.join(", ") + "<br>";
    }
}

// Függvény a páros elemek összegének kiszámolásához
function parosElemekOsszege(tomb: number[]): number {
    return tomb.filter(elem => elem % 2 === 0).reduce((osszeg, elem) => osszeg + elem, 0);
}

// Függvény a páratlan elemek átlagának kiszámolásához
function paratlanElemekAtlag(tomb: number[]): number {
    const paratlanok = tomb.filter(elem => elem % 2 !== 0);
    return paratlanok.length > 0 ? paratlanok.reduce((osszeg, elem) => osszeg + elem, 0) / paratlanok.length : 0;
}

// Függvény a legkisebb érték meghatározásához
function legkisebbErtek(tomb: number[]): number {
    return Math.min(...tomb);
}

// Függvény a legkisebb érték indexével
function legkisebbErtekIndex(tomb: number[]): number[] {
    const minErtek = legkisebbErtek(tomb);
    return tomb.reduce((indexek, elem, currentIndex) => {
        if (elem === minErtek) {
            indexek.push(currentIndex);
        }
        return indexek;
    }, [] as number[]);
}

// Függvény a véletlenszerű elem megjelenítéséhez
function veletlenElemMegjelenit(tomb: number[]): void {
    const veletlenIndex = Math.floor(Math.random() * tomb.length);
    alert(`f. Véletlenszerű elem a tömbből: ${tomb[veletlenIndex]}`);
}

// Eljárás minden 5. elem megjelenítéséhez
function minden5ElemMegjelenit(tomb: number[]): void {
    const megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        megoldasokElem.innerHTML += "g. Minden 5. elem: " + tomb.filter((_, index) => (index + 1) % 5 === 0).join(", ") + "<br>";
    }
}

// Eljárás hárommal osztható számok megjelenítéséhez
function harommalOszthatoSzamokMegjelenit(tomb: number[]): void {
    const harommalOszthatoak = tomb.filter(elem => elem % 3 === 0);
    const megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        if (harommalOszthatoak.length > 0) {
            megoldasokElem.innerHTML += "h. Hárommal osztható számok: " + harommalOszthatoak.join(", ") + "<br>";
        } else {
            megoldasokElem.innerHTML += "h. Nincs hárommal osztható szám a tömbben.<br>";
        }
    }
}

// Megoldásokat kezelő fő függvény
function megoldas(): void {
    const tomb = tombFeltolt();

    kiirTomb(tomb);

    const parosOsszeg = parosElemekOsszege(tomb);
    const paratlanAtlag = paratlanElemekAtlag(tomb);
    const legkisebb = legkisebbErtek(tomb);
    const legkisebbIndexek = legkisebbErtekIndex(tomb);

    const megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        megoldasokElem.innerHTML += `b. Páros elemek összege: ${parosOsszeg}<br>`;
        megoldasokElem.innerHTML += `c. Páratlan elemek átlaga: ${paratlanAtlag.toFixed(2)}<br>`;
        megoldasokElem.innerHTML += `d. Legkisebb érték: ${legkisebb}<br>`;
        megoldasokElem.innerHTML += `e. Legkisebb érték indexei: ${legkisebbIndexek.join(", ")}<br>`;
    }

    veletlenElemMegjelenit(tomb);
    minden5ElemMegjelenit(tomb);
    harommalOszthatoSzamokMegjelenit(tomb);
}