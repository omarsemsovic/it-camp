// KONDICIONALI //

//if (uslov1) {
    //kod za iyvrsavanje u slucaju ispustanja uslova
//} else if (uslov2) {
    //kod za izvrsavanje u slucaju ispunjavanja drugog uslova
//}else {
    //kod za izvrsavanje u slucaju ne yadovoljava uslov
//}

// ako je broj godina unet od strane korisnika >= 18,
// neka se ispise poruka "punoletni ste",
//u suprotno "maloletni ste",
// const godine = Number(prompt("unesite broj godina: "));
// if(godine >= 18) {
//     console.log("punoletni ste:")
// } else if (godine <18 && godine >= 0)  {
//     console.log("maloletni ste")
// } else if (godine < 0) {
//     console.log("broj godina ne moze biti negativan")
// } else {
//     console.log("niste uneli broj godina")
// }

const godine = Number(prompt("unesite broj godina:"))
if(godine >= 18) {
    console.log("vi ste punoletni");
} else if  (godine < 12) {
    console.log("vi ste decijeg doba");
} else if  (godine  >12 && godine <=17) {
} else {
    console.log("niste uneli broj godina")
}

// switch naredbe //
// sintaksa : // 
// switch (izraz) 
    // case x:
        //blcok koda koji se u slucaju da je izraz = x
        // break 
        // case z:
        //BLOCK KOD KOJI SE IZVRASAVA u slucaju da je izraz = z
        // break;
        // default:
            //block koda koji se izvrsava u slucaju da izraz nije jednak ni x, ni y ni z //


// ukljucuje se i 12 i 15
// const broj = +prompt ("unesi te broj izmedu  12 i 15:")
// switch (broj) {
//     case 12
//     console.log("unet je broj 12");
//     brake;
//     case 13;
//     console.log("unet je broj 13");
//     brake;
//     case 14
//     console.log("unet je broj 14");
//     brake;
//     case 15;
//     console.log("unet je broj 15");
//     brake;
//     default:
//     console.log("");
// }

 const x= +prompt