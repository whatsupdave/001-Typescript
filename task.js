// Bendras didziausias daliklis
console.log('------ 1 UZDUOTIS ------');
var bdd = function (x, y) {
    for (var i = Math.min(x, y); i > 0; i--)
        if (x % i == 0 && y % i == 0)
            return i;
};
console.log(bdd(10, 15));
//
console.log('------ 2 UZDUOTIS ------');
;
var distance = function (p) {
    return Math.sqrt(p.x * p.x + p.y * p.y);
};
var taskas = {
    x: 5,
    y: 5
};
console.log('Atstumas iki tasko 5;5 yra: ' + distance(taskas));
