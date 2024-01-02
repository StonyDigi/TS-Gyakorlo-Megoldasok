// Függvény a másodfokú egyenlet megoldásához
function megoldMasodfokuEgyenlet() {
    // Beolvasás az űrlapról
    var inputA = document.getElementById("inputA");
    var inputB = document.getElementById("inputB");
    var inputC = document.getElementById("inputC");
    var a = parseFloat(inputA.value) || 0;
    var b = parseFloat(inputB.value) || 0;
    var c = parseFloat(inputC.value) || 0;
    // Megoldás
    var eredmeny = masodfokuEgyenletMegoldo(a, b, c);
    // Eredmény kiírása
    kiirEredmeny(eredmeny);
}
// Függvény a másodfokú egyenlet megoldásához
function masodfokuEgyenletMegoldo(a, b, c) {
    var diszkriminans = Math.pow(b, 2) - 4 * a * c;
    if (diszkriminans > 0) {
        var x1 = (-b + Math.sqrt(diszkriminans)) / (2 * a);
        var x2 = (-b - Math.sqrt(diszkriminans)) / (2 * a);
        return "Az egyenlet gy\u00F6kei: x1 = ".concat(x1.toFixed(2), ", x2 = ").concat(x2.toFixed(2));
    }
    else if (diszkriminans === 0) {
        var x = -b / (2 * a);
        return "Az egyenletnek egyetlen gy\u00F6kje van: x = ".concat(x.toFixed(2));
    }
    else {
        return "Az egyenletnek nincs valós gyöke.";
    }
}
// Eredmény kiírása a HTML kimeneten
function kiirEredmeny(eredmeny) {
    var eredmenyElem = document.getElementById("eredmeny");
    if (eredmenyElem) {
        // Az eredmény kiírása a HTML kimeneten
        eredmenyElem.innerHTML = "<p>".concat(eredmeny, "</p>");
    }
    else {
        console.error("Az 'eredmeny' elem nem található.");
    }
}
