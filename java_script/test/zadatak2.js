// 2. Napisati program koji ispisuje u konzoli brojeve od 1 do 100(ukljucujuci) tako da:
 
// (i)	ako je broj deljiv sa 3, potrebno je ispisati ‘FIZZ’ umesto tog broja;
// (ii)	ako je broj deljiv sa 5, potrebno je ispisati ‘BUZZ’ umesto tog broja;
// (iii)	ako je broj deljiv i sa 3 i sa 5, potrebno je ispisati ‘FIZZ BUZZ’ umesto tog broja.
 

// 2.

for(let i=1;i<=100;i++){
    if(i%5===0 && i%3===0){
        console.log("fizz buzz")
    }
    else if(i%3===0){
        console.log("fizz")
    }
    else if(i%5===0){
        console.log("buzz")
    }
    
    else console.log(i)
}
