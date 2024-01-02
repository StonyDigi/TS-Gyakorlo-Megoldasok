/*

A generatePassword függvény a characters változóban tárolt karakterekből választ véletlenszerűen, majd hozzáadja azokat a jelszóhoz a megadott hosszúságig.
A példa azt mutatja be, hogyan hívhatod meg a függvényt egy konkrét hosszúságú jelszó generálására, majd kiírhatod azt.

*/
// Fő függvény a jelszó generálásához
function generatePassword(length) {
    var characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var password = '';
    // A jelszó generálása a megadott hosszúság alapján
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }
    return password;
}
// Függvény a jelszó generálására és megjelenítésére a HTML oldalon
function generateAndDisplayPassword() {
    // Az 'generatedPassword' elem lekérése
    var generatedPasswordElement = document.getElementById("generatedPassword");
    if (generatedPasswordElement) {
        // Generált jelszó előállítása
        var generatedPassword = generatePassword(150);
        // A generált jelszó megjelenítése a HTML oldalon
        generatedPasswordElement.textContent = "Gener\u00E1lt jelsz\u00F3: ".concat(generatedPassword);
    }
    else {
        console.error("Az 'generatedPassword' elem nem található.");
    }
}
