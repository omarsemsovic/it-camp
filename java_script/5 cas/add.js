// internacija sa korisnikom //

// prompt() metoda nam sluyi ya komunikaciju sa korisnikom.

const Ime = prompt("unesite vase ime: ");
console.log(Ime);
//sve sto korisnik unese je tipa string//
const godine = prompt ("unesite svoju  starost: ");
console.log(godine);
console.log(typeof godine);
//sad je neophodno godine prevesti u broj:

//1. number(promenjiva)
const brgodina = Number(godine);
console.log(brgodina);
console.log(typeof godine);

//2. promenjiva
const brgodina2 = +godine;
console.log(brgodina2);
console.log(typeof brgodina2);

const visina = +prompt("unesite svoju visinu u cm: ")
console.log(visina);
