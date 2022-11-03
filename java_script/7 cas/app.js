// while petlja nam omogucava interaciju kroy neki objekat nekoliko puta uy potecijalno odredene uslove

// while (uslov) {
// }
let i = 0;
while (i < 11) {
    if (i % 2 ===0) {
        console.log(i);
    }
    i++;        
}

// let brojac=1;
// let broj=Number(prompt("unesite broj od 1 do 100"))
// while(brojac<broj) {
//     console.log(brojac*Brojac)
//     brojac++
// }

// const broj = +prompt("unesite neki pozitivan broj");
// let interator = 1;
// while (interator <= broj) {
//     console.log(interator ** 2);
//     interator++;
// }

let broj1=Number(prompt("unesi pocetni broj"));
let broj2=Number(prompt("unesi drugi broj"));

let broj3 = 1;
do {
    console.log(broj3);
    broj3++;
} while (broj3 < 6);

let broj4 = Number(prompt("unesi te neki broj"))
do {
    console.log(broj4);
    broj4++;
}while (broj4 < 20);


