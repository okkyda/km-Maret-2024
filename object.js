// // Objek 



// // function ubahObj(array) { 
// //     var hasil = {};
// //     hasil.jenis = array[0];
// //     hasil.harga = array[1];
// //     hasil.enak = array[2];
// //     return hasil;
// // }

// // console.log(ubahObj(["Durian", 7500, true]));


// // function bio(array){
// //     var hasil = {};
// //     hasil.nama = array[0];
// //     hasil.berat = array[1];
// //     hasil.tinggi = array[2]; // Menggunakan indeks 2 untuk mengakses tinggi
// //     hasil.hobi = array.slice(3); // Menggunakan slice() untuk mengakses hobi dari indeks 3 sampai akhir
// //     return hasil;
// // }

// // console.log(bio(["Caca", "45 Kg", "155 Cm", "Nonton", "Makan"]));


// var biodata = {
//     nama: "caca",
//     berat: 45 ,
//     tinggi: 155 ,
//     hobi:["Nonton dan Makan"],

//    sebutkanHobi:function () {
//         console.log("Hobi caca : ");
//         for(var x = 1 ; x <this.hobi.length; x++ ) {
//             console.log(x+1+"." + this.hobi[x])
//         }

//     }
// }

// console.log(biodata.hobi);

// for (var key in biodata){
//     console.log(key);
//     console.log(biodata[key]);
    

// }

// // Array Of OBJ

// var items= [ 
//     {
//         id: 1,
//         nama:"lepi",
//         harga:15000

//     }, {
//         id:2,
//         nama:"cpu",
//         harga:6000
//     }
// ]

// console.log(items)

// Study Case 

// function hitVocal (str) {
//     var hasil = {
//         a:0,
//         i:0,
//         u:0,
//         e:0,
//         o:0

//     };

//     for (var x = 0; x < str.length ; x++ ) {
//         if(str[x]==="a") {
//             hasil.a++;

//         }else if (str[x] === "i"){
//             hasil.i++;
//         }else if (str[x] === "u"){
//             hasil.u++;
//         }else if (str[x] === "e"){
//             hasil.e++;
//         }else if (str[x] === "o"){
//             hasil.o++;
//         }
//     }

//     console.log(hasil);
// }

// stud case

function hitPilih(arr) { 
    var hsl = {
        rode: 0,
        rodri: 0
    };
    for (var x = 0; x < arr.length; x++) {
        if (arr[x] === "rode") {
            hsl.rode++;
        } else if (arr[x] === "rodri") {
            hsl.rodri++;
        }
    }
    console.log(hsl);
}

hitPilih(["rode", "rodri", "rode", "rode", "rodri"]);

