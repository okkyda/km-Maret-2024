// Objek 



// function ubahObj(array) { 
//     var hasil = {};
//     hasil.jenis = array[0];
//     hasil.harga = array[1];
//     hasil.enak = array[2];
//     return hasil;
// }

// console.log(ubahObj(["Durian", 7500, true]));


// function bio(array){
//     var hasil = {};
//     hasil.nama = array[0];
//     hasil.berat = array[1];
//     hasil.tinggi = array[2]; // Menggunakan indeks 2 untuk mengakses tinggi
//     hasil.hobi = array.slice(3); // Menggunakan slice() untuk mengakses hobi dari indeks 3 sampai akhir
//     return hasil;
// }

// console.log(bio(["Caca", "45 Kg", "155 Cm", "Nonton", "Makan"]));


var biodata = {
    nama: "caca",
    berat: "45 Kg",
    tinggi: "155 cm",
    hobi: "Nonton dan Makan"
}

for (var key in biodata){
    console.log(key);
    console.log(biodata[key]);
    

}