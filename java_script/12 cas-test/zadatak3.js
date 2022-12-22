// 3.
//  let recenica;
// recenica = “Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa”
//  Na osnovu date recenice napraviti i ispisati novu recenicu tako da:
 
// (i)	se svi samoglasnici pretvore u velika slova;
// (ii)	na kraju se doda ‘.’
// (iii)	ostali karakteri se ne menjaju.
// Dakle, treba se ispisati:
// “NAkOn dAnAsnjEg tEstA cEmO znAtI kO cE nAstAvItI sA drUgIm cIklUsOm It cAmpA.”


// 3.

let recenica ="danas cemo zavrsiti polovinu javascripta"
let nova = "."
for (i=0;i<recenica.length;i++) {
    if (recenica[i] === "e" || recenica[i] === "a" | recenica[i] === "o" || recenica[i] === "i"|| recenica[i] === "u") {
        nova+=recenica[i]. toUpperCase()
    }
    else nova+=recenica[i]
}
console.log ()

