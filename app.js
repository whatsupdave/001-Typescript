// Deklaravimas kintamuju
var x = 10;
var vyras = false;
var vardas = "Jonas";
var kazkas = 'belekas';
var savaitesTemperaturos = [1, 4, 5, 3];
var darbuotojuSarasas = ['Jonaitis', 'Petraitis'];
var lytis;
(function (lytis) {
    lytis[lytis["Vyras"] = 0] = "Vyras";
    lytis[lytis["Moteris"] = 1] = "Moteris";
})(lytis || (lytis = {}));
var darbuotojoPirmoLytis = lytis.Moteris;
// funkcijos teisingas uzrasymas
var suma = function (x, y) {
    var res;
    res = x + y;
    return res;
};
console.log(suma(5, 8));
// faktorialas
var faktorialas = function (n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};
console.log('Skaiciaus 5 faktorialas: ' + faktorialas(5));
console.log('Skaiciaus 3 faktorialas: ' + faktorialas(3));
