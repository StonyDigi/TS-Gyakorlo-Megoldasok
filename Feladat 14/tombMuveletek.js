/*

Ebben a példában a tombFeltolt függvény létrehoz egy véletlen tömböt a felhasználó által megadott paraméterek alapján.
 Az eljárások és függvények a kért feladatokat oldják meg, és az eredményeket a HTML kimeneten jelenítik meg.

*/
// Függvény a tömb feltöltéséhez
function tombFeltolt() {
    var elemszam = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // 5-20 közötti véletlen elemszám
    var alsoHatar = parseInt(prompt("Adja meg a véletlen számok alsó határát:")) || 0;
    var felsoHatar = parseInt(prompt("Adja meg a véletlen számok felső határát:")) || 100;
    var tomb = [];
    for (var i = 0; i < elemszam; i++) {
        var veletlenSzam = Math.floor(Math.random() * (felsoHatar - alsoHatar + 1)) + alsoHatar;
        tomb.push(veletlenSzam);
    }
    return tomb;
}
// Eljárás a tömb elemeinek kiírásához
function kiirTomb(tomb) {
    var megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        megoldasokElem.innerHTML += "a. Tömb elemei: " + tomb.join(", ") + "<br>";
    }
}
// Függvény a páros elemek összegének kiszámolásához
function parosElemekOsszege(tomb) {
    return tomb.filter(function (elem) { return elem % 2 === 0; }).reduce(function (osszeg, elem) { return osszeg + elem; }, 0);
}
// Függvény a páratlan elemek átlagának kiszámolásához
function paratlanElemekAtlag(tomb) {
    var paratlanok = tomb.filter(function (elem) { return elem % 2 !== 0; });
    return paratlanok.length > 0 ? paratlanok.reduce(function (osszeg, elem) { return osszeg + elem; }, 0) / paratlanok.length : 0;
}
// Függvény a legkisebb érték meghatározásához
function legkisebbErtek(tomb) {
    return Math.min.apply(Math, tomb);
}
// Függvény a legkisebb érték indexével
function legkisebbErtekIndex(tomb) {
    var minErtek = legkisebbErtek(tomb);
    return tomb.reduce(function (indexek, elem, currentIndex) {
        if (elem === minErtek) {
            indexek.push(currentIndex);
        }
        return indexek;
    }, []);
}
// Függvény a véletlenszerű elem megjelenítéséhez
function veletlenElemMegjelenit(tomb) {
    var veletlenIndex = Math.floor(Math.random() * tomb.length);
    alert("f. V\u00E9letlenszer\u0171 elem a t\u00F6mbb\u0151l: ".concat(tomb[veletlenIndex]));
}
// Eljárás minden 5. elem megjelenítéséhez
function minden5ElemMegjelenit(tomb) {
    var megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        megoldasokElem.innerHTML += "g. Minden 5. elem: " + tomb.filter(function (_, index) { return (index + 1) % 5 === 0; }).join(", ") + "<br>";
    }
}
// Eljárás hárommal osztható számok megjelenítéséhez
function harommalOszthatoSzamokMegjelenit(tomb) {
    var harommalOszthatoak = tomb.filter(function (elem) { return elem % 3 === 0; });
    var megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        if (harommalOszthatoak.length > 0) {
            megoldasokElem.innerHTML += "h. Hárommal osztható számok: " + harommalOszthatoak.join(", ") + "<br>";
        }
        else {
            megoldasokElem.innerHTML += "h. Nincs hárommal osztható szám a tömbben.<br>";
        }
    }
}
// Megoldásokat kezelő fő függvény
function megoldas() {
    var tomb = tombFeltolt();
    kiirTomb(tomb);
    var parosOsszeg = parosElemekOsszege(tomb);
    var paratlanAtlag = paratlanElemekAtlag(tomb);
    var legkisebb = legkisebbErtek(tomb);
    var legkisebbIndexek = legkisebbErtekIndex(tomb);
    var megoldasokElem = document.getElementById("megoldasok");
    if (megoldasokElem) {
        megoldasokElem.innerHTML += "b. P\u00E1ros elemek \u00F6sszege: ".concat(parosOsszeg, "<br>");
        megoldasokElem.innerHTML += "c. P\u00E1ratlan elemek \u00E1tlaga: ".concat(paratlanAtlag.toFixed(2), "<br>");
        megoldasokElem.innerHTML += "d. Legkisebb \u00E9rt\u00E9k: ".concat(legkisebb, "<br>");
        megoldasokElem.innerHTML += "e. Legkisebb \u00E9rt\u00E9k indexei: ".concat(legkisebbIndexek.join(", "), "<br>");
    }
    veletlenElemMegjelenit(tomb);
    minden5ElemMegjelenit(tomb);
    harommalOszthatoSzamokMegjelenit(tomb);
}
