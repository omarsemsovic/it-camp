
// 1.	Traziti od korisnika unos nekog realnog broja. Nakon toga ispisati u konzoli kvadrat tog broja
// (pozeljno je obuhvatiti slucaj kada korisnik ne unese odgovarajucu vrednost).


// 1.

let a=+prompt("unesite koji hoce te broj")
if (isNaN(a)) {
    console.log("uneti podatak koji je broj")
} else {
    console.log(a*a)
}

