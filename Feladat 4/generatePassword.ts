/*

A generatePassword függvény a characters változóban tárolt karakterekből választ véletlenszerűen, majd hozzáadja azokat a jelszóhoz a megadott hosszúságig. 
A példa azt mutatja be, hogyan hívhatod meg a függvényt egy konkrét hosszúságú jelszó generálására, majd kiírhatod azt.

*/

// Fő függvény a jelszó generálásához
function generatePassword(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let password = '';

    // A jelszó generálása a megadott hosszúság alapján
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    return password;
}

// Függvény a jelszó generálására és megjelenítésére a HTML oldalon
function generateAndDisplayPassword() {
    // Az 'generatedPassword' elem lekérése
    const generatedPasswordElement = document.getElementById("generatedPassword");

    if (generatedPasswordElement) {
        // Generált jelszó előállítása
        const generatedPassword = generatePassword(150);

        // A generált jelszó megjelenítése a HTML oldalon
        generatedPasswordElement.textContent = `Generált jelszó: ${generatedPassword}`;
    } else {
        console.error("Az 'generatedPassword' elem nem található.");
    }
}
