// Deklaravimas kintamuju

let x: number = 10;
let vyras: boolean=false;
let vardas:string="Jonas";
let kazkas:any='belekas';

let savaitesTemperaturos:number[]=[1,4,5,3];
let darbuotojuSarasas:string[]=['Jonaitis', 'Petraitis'];

enum lytis{Vyras, Moteris}
let darbuotojoPirmoLytis:lytis=lytis.Moteris;

// funkcijos teisingas uzrasymas

let suma = (x:number, y:number):number=>{
    let res:number;
    res = x+y;
    return res;
};

console.log(suma(5,8));

// faktorialas

let faktorialas = (n:number):number => {
    let result = 1;
    for (let i = 1; i<=n; i++){
        result*=i;
    }

    return result;
}

console.log('Skaiciaus 5 faktorialas: '+faktorialas(5));
console.log('Skaiciaus 3 faktorialas: '+faktorialas(3));
