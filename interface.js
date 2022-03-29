var apsilankymas = function (lankytojas) {
    console.log('Pas mus apsilanke ' + lankytojas.vardas + ', jo amzius: ' + lankytojas.amzius);
};
var paliko = function (lankytojas) {
    console.log('Is pastato isejo ' + lankytojas.vardas + ', jo amzius: ' + lankytojas.amzius);
};
var lankytojas = {
    vardas: 'Jonas',
    amzius: 26
};
apsilankymas(lankytojas);
paliko(lankytojas);
