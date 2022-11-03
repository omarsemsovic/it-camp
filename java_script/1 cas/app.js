document.getElementById("paragraf").innerHTML =
"ovo je paragraf koji je unet naknadno "

paragraf = document.getElementById("paragraf")

paragraf.style.backgroundColor = "red";

console.log("ovo je nas prvi ispis u nasoj konzoli omg")

console.log("ovo je neki strim napisan unutar duplih navodnika")

console.log(typeof"ovo je neki strim napisan unutar duplih navodnika")

console.log('ovo je neki strim napisan obicnih navodnika')

// 2. number- predstavlja broj, koji moze biti zapisan sa ili bez decimalnog zareza //
// ne pravi se razlika izmedu celih ,realnih i kompeksnih brojeva // 

// tipovi podataka u java scriptu //

// za proveru tipa neke promenjlive (varijante) se koristi typeof operatora

// primintivni tipovi podataka // 

// 1. strigovi - predstavljaju niz karaktera koji moze biti zapisan unutar navodnika (obicnih ili duplih ) //

console.log(14)
console.log(typeof 14)

console.log(-5,67)
console.log(typeof -5,67)

//  3.BigInt - se koristi za skladenje brojeva cije granice prelaze granicu number tipa podataka //

console.log(BigInt(9867890987654312345678987654321234567890))
console.log(typeof BigInt(9867890987654312345678987654321234567890))

// 4.Boolean - logicki element koji moze da ima 2 vrednosti true ili false //
//najcesce se koristi u kondicijonalu (if naredbe) i ima veliku primenu //

DeLiPadaKisa = false;

console.log(true);
console.log(typeof true);

console.log(DeLiPadaKisa);

// 5. underfind - javlja se kada imamo neku deklarisanu neku pomenljivu ali joj nismo dodali vrednost 
// u tom slucaju i vrednost i tip promenjive je undefined

let prom1; //deklenisanje promenjive 
prom1=54; // inicijalizacija tj. promena vrednosti promenjive

// 6. null - za postojecu  nepromenjivu  ili promenjivu kojoj smo dodelili nekoreknu vrednost

let skola;
console.log(skola)