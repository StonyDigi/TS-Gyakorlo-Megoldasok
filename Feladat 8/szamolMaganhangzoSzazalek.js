/*

Ebben a kódban a szamolMaganhangzoSzazalek függvény számolja ki a magánhangzók százalékos arányát,
majd a kiirEredmenyt függvény jeleníti meg az eredményt az HTML oldalon. A magánhangzók listáját a változóban tároljuk,
és a számolás során kiszűrjük a speciális karaktereket.

*/
// Függvény a magánhangzók százalékos arányának számolásához és megjelenítéséhez
function szamolMaganhangzoSzazalekEsKiir() {
    // Input mező értékének lekérdezése
    var szoveg = getInputValue("szoveg");
    // Érvényes adatok ellenőrzése
    if (szoveg.trim().length > 0) {
        // Magánhangzók százalékos arányának számolása
        var maganhangzoSzazalek = szamolMaganhangzoSzazalek(szoveg);
        // Az eredmény megjelenítése a HTML kimeneten
        kiirEredmenyt(maganhangzoSzazalek);
    }
    else {
        // Hiba esetén hibaüzenet kiírása
        kiirEredmenyt("Kérlek adj meg érvényes szöveget");
    }
}
// Függvény a magánhangzók százalékos arányának számolásához
function szamolMaganhangzoSzazalek(szoveg) {
    var maganhangzok = "aeiouAEIOUáéíóőúűÁÉÍÓŐÚŰ";
    var maganhangzoDb = 0;
    var osszKarakterDb = 0;
    for (var _i = 0, szoveg_1 = szoveg; _i < szoveg_1.length; _i++) {
        var karakter = szoveg_1[_i];
        // Speciális karakterek kiszűrése
        if (karakter.match(/[a-zA-Z]/)) {
            osszKarakterDb++;
            if (maganhangzok.includes(karakter)) {
                maganhangzoDb++;
            }
        }
    }
    // Magánhangzók százalékos aránya
    return (maganhangzoDb / osszKarakterDb) * 100;
}
// Input mező értékének lekérdezése
function getInputValue(id) {
    return document.getElementById(id).value;
}
// Eredmény kiírása a HTML kimeneten
function kiirEredmenyt(maganhangzoSzazalek) {
    var eredmenyElem = document.getElementById("eredmeny");
    if (eredmenyElem) {
        // Az eredmény kiírása a HTML kimeneten
        eredmenyElem.textContent = typeof maganhangzoSzazalek === 'number'
            ? "A sz\u00F6vegben l\u00E9v\u0151 karakterek ".concat(maganhangzoSzazalek.toFixed(2), "%-a mag\u00E1nhangz\u00F3.")
            : maganhangzoSzazalek.toString();
    }
    else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}
