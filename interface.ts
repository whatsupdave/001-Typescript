interface Zmogus{
    vardas:string,
    amzius:number,
    telefonas?:string
}

let apsilankymas = (lankytojas: {vardas:string, amzius:number}) =>{
    console.log('Pas mus apsilanke ' + lankytojas.vardas+', jo amzius: '+lankytojas.amzius);
}

let paliko = (lankytojas: {vardas:string, amzius:number}) =>{
    console.log('Is pastato isejo ' + lankytojas.vardas+', jo amzius: '+lankytojas.amzius);
}

let lankytojas:Zmogus = {
    vardas:'Jonas',
    amzius: 26
};

apsilankymas(lankytojas);
paliko(lankytojas);