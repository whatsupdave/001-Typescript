
// Bendras didziausias daliklis

console.log('------ 1 UZDUOTIS ------')

let bdd=(x:number, y:number):number =>{
    for(let i = Math.min(x,y); i >0; i--)
        if (x%i==0 && y%i==0)
            return i;
};

console.log(bdd(10,15));

//

console.log('------ 2 UZDUOTIS ------')

interface Point{
    x: number,
    y: number
};

let distance=(p:Point)=>{
    return Math.sqrt(p.x*p.x+p.y*p.y);
}

let taskas:Point={
    x:5,
    y:5
}

console.log('Atstumas iki tasko 5;5 yra: ' +distance(taskas));