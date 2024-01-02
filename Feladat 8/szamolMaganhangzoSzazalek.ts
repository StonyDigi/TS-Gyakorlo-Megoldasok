/*

Ebben a kódban a szamolMaganhangzoSzazalek függvény számolja ki a magánhangzók százalékos arányát, 
majd a kiirEredmenyt függvény jeleníti meg az eredményt az HTML oldalon. A magánhangzók listáját a változóban tároljuk, 
és a számolás során kiszűrjük a speciális karaktereket.

*/

// Függvény a magánhangzók százalékos arányának számolásához és megjelenítéséhez
function szamolMaganhangzoSzazalekEsKiir() {
    // Input mező értékének lekérdezése
    const szoveg = getInputValue("szoveg");

    // Érvényes adatok ellenőrzése
    if (szoveg.trim().length > 0) {
        // Magánhangzók százalékos arányának számolása
        const maganhangzoSzazalek = szamolMaganhangzoSzazalek(szoveg);

        // Az eredmény megjelenítése a HTML kimeneten
        kiirEredmenyt(maganhangzoSzazalek);
    } else {
        // Hiba esetén hibaüzenet kiírása
        kiirEredmenyt("Kérlek adj meg érvényes szöveget");
    }
}

// Függvény a magánhangzók százalékos arányának számolásához
function szamolMaganhangzoSzazalek(szoveg: string): number {
    const maganhangzok = "aeiouAEIOUáéíóőúűÁÉÍÓŐÚŰ";
    let maganhangzoDb = 0;
    let osszKarakterDb = 0;

    for (let karakter of szoveg) {
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
function getInputValue(id: string): string {
    return (document.getElementById(id) as HTMLInputElement).value;
}

// Eredmény kiírása a HTML kimeneten
function kiirEredmenyt(maganhangzoSzazalek: number | string): void {
    const eredmenyElem = document.getElementById("eredmeny");

    if (eredmenyElem) {
        // Az eredmény kiírása a HTML kimeneten
        eredmenyElem.textContent = typeof maganhangzoSzazalek === 'number'
            ? `A szövegben lévő karakterek ${maganhangzoSzazalek.toFixed(2)}%-a magánhangzó.`
            : maganhangzoSzazalek.toString();
    } else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}