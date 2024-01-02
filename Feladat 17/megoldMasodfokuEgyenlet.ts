// Függvény a másodfokú egyenlet megoldásához
function megoldMasodfokuEgyenlet() {
    // Beolvasás az űrlapról
    const inputA = document.getElementById("inputA") as HTMLInputElement;
    const inputB = document.getElementById("inputB") as HTMLInputElement;
    const inputC = document.getElementById("inputC") as HTMLInputElement;

    const a = parseFloat(inputA.value) || 0;
    const b = parseFloat(inputB.value) || 0;
    const c = parseFloat(inputC.value) || 0;

    // Megoldás
    const eredmeny = masodfokuEgyenletMegoldo(a, b, c);

    // Eredmény kiírása
    kiirEredmeny(eredmeny);
}

// Függvény a másodfokú egyenlet megoldásához
function masodfokuEgyenletMegoldo(a: number, b: number, c: number): string {
    const diszkriminans = b ** 2 - 4 * a * c;

    if (diszkriminans > 0) {
        const x1 = (-b + Math.sqrt(diszkriminans)) / (2 * a);
        const x2 = (-b - Math.sqrt(diszkriminans)) / (2 * a);
        return `Az egyenlet gyökei: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    } else if (diszkriminans === 0) {
        const x = -b / (2 * a);
        return `Az egyenletnek egyetlen gyökje van: x = ${x.toFixed(2)}`;
    } else {
        return "Az egyenletnek nincs valós gyöke.";
    }
}

// Eredmény kiírása a HTML kimeneten
function kiirEredmeny(eredmeny: string): void {
    const eredmenyElem = document.getElementById("eredmeny");

    if (eredmenyElem) {
        // Az eredmény kiírása a HTML kimeneten
        eredmenyElem.innerHTML = `<p>${eredmeny}</p>`;
    } else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}