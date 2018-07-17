var variabelVar = "Ini Variale Var";
let variabelLet = "ini Variable Let";
var VariableConst = "ini Varibale Cosnt";
//menggunakan variable var 
console.log("------"+variabelVar+"-------");
var firstName ;
var lastName  = "Natawijaya";
var age = 15;
var address = "bogor";
    
var firstName = "BIMA";
var address = "jakarta";
 
var fullName = firstName+" "+lastName
console.log(fullName);

var fullName = "Umur saya "+age+" "+"alamat saya "+address
console.log(fullName);

function nameFull(){
    for(age = 0 ; age < 5; age++){
        console.log(age);
    }
}
nameFull();
// console.log(age);

if (age > 10) {
    const ageFather = age * 2;
    console.log("Umur bapak saya "+ageFather+" tahun");
}
//Keterangan :
/* Jika kita menggunakan sintaks Variable "Var" yg terjadi adalah 
variable bisa membuat variable yg sama namun isi nya berbeda . 
tapi yang akan kebaca oleh sistem adalah variable yg baru sekaligus variable yang lama 
otomatis ke replace atau ketimpah dengan yg baru.

dan juga variable dapat dipakai beberapa kali

*/

//menggunakan variable let
console.log("-----"+variabelLet+"-------")

let namaAwal = "Kevin";
let namaAkhir = "Hermawan";
let email = "Kevinhermawanx@gmail.com";
//let email = "bimanatawijaya@gmail.com"; //Jika menggunakan ini akan error karna variable let gamau nerima dia di bawa;
email = "bima.natawi@gmail.com";// jika hanya nama varible nya saja yg di pakai itu sistem akan menerimanya;

console.log(namaAwal+" "+namaAkhir);
console.log("Email"+" "+email);

function namaLengkap(awal,akhir){
    //console.log(namaAwal,namaAkhir);
    console.log(awal,akhir);
}
namaLengkap("isa","almunawar");

for(let i = 0; i <= 15 ; i++){
    console.log("nomor" ,i);
    if (true) {
        i = 1000;
        console.log("jajal",i);
    }
}

/*
    
*/
console.log("-----"+VariableConst+"------");
const a  = "b";
const b = "a" ; 
const c = "n"; 
let hasil = () => {
     const a = "bima";
    console.log(a)
}
hasil();



//variable var jika dideklarasikan nya di for dan berjalan di fungsi itu hanya bisa berjalan didalam fungsi nya saja.

function javascript(){
   for(var x = 0; x<5; x++){
       console.log("Variable Const",x);
   }
   const afterLoop = function(){
        console.log("Variable const di after",x);
   }

   afterLoop();
}
javascript();
//console.log(o);//ini error

//tapi jika dideklarasikan di luar function dapat berjalan

console.log("deklarasi di luar function");

var o = 0;

function javascript(){
    for( o = 0; o<5; o++){
        console.log("Variable Const",o);
    }
    const afterLoop = function(){
         console.log("Variable const di after",o);
    }
 
    afterLoop();
 }
 javascript();
 console.log(o);//ini tidak error.
 