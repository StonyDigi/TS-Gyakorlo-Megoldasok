/*

Ebben a példában a felhasználó megadhatja a születési helyét, majd a "Döntés" gombra kattintva az alkalmazás eldönti, 
hogy vidéken vagy a fővárosban született-e a felhasználó. Az eredményt a felhasználónak jeleníti meg.

*/


// Függvény a döntéshez, hogy vidéken vagy a fővárosban született
function dontesVidekenSzuletett() {
    // Beolvasás az űrlapról
    const szuletesiHelyInput = document.getElementById("szuletesiHelyInput") as HTMLInputElement;
    const szuletesiHely = szuletesiHelyInput.value.trim().toLowerCase();

    // Döntés a születési hely alapján
    const eredmeny = szuletettHol(szuletesiHely);

    // Eredmény kiírása
    kiirSzuletettHolEredmeny(eredmeny);
}

// Függvény a döntéshez, hogy vidéken vagy a fővárosban született
function szuletettHol(szuletesiHely: string): string {
    // A fővárosok listája (példa)
    const fovaros = ["budapest"];

    // A születési hely ellenőrzése
    if (fovaros.includes(szuletesiHely)) {
        return "Fővárosban születtél!";
    } else {
        return "Vidéken születtél!";
    }
}

// Eredmény kiírása a HTML kimeneten
function kiirSzuletettHolEredmeny(eredmeny: string): void {
    const szuletettHolEredmenyElem = document.getElementById("szuletettHolEredmeny");

    if (szuletettHolEredmenyElem) {
        // Az eredmény kiírása a HTML kimeneten
        szuletettHolEredmenyElem.innerHTML = `<p>${eredmeny}</p>`;
    } else {
        console.error("Az 'szuletettHolEredmeny' elem nem található.");
    }
}
