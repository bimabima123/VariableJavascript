# bima-variable-js

Perbedaan variable var,Let, dan Cosnt.

 semua Varible ini termasuk sintaks yang di siapkan dari ES6 , jadi ini bentuk default dan tidak dapat dibuat sendiri atau di edit.

*varible var 
  Pendeklarasian variabel yang dapat diubah ( reassign ) isinya, bersifat function-scoped.
  
  example.
    Var didalam Fungsi.
```javascript
    function variableVar(){
      for(var i = 0; i<5; i++){
        console.log(i);
      }
      i = 5000;
      console.log(i); //5000
    }
    variableVar();
 ```
    
   example.
   Var diluar Fungsi.
    jika var dideklarasikan di luar function itu variable bersifat Global.
  ```javascript
    var i = 0;
    function VariableVar(){
      for(i<5;i++){
        console.log(i); // 0,1,2,3,4
      }
    }
    Variable();
    console.log(i) // 5
  ````
    
 *Variable let 
 Mirip dengan var nilainya dapat diubah kembali (reassign), namun bersifat block-scoped.
```javascript
 function VariableLet(x) {
  if(x > 1) {
    let name = "Belajar Javascript"
        name = 'Hello World'
    console.log(hello)
  }
  console.log(hello)
}
VariableLet()
```
  *Variable Const
  Hampir mirip dengan const bersifat block-scoped, bedanya const nilainya tidak dapat diubah.
  
 ```javascript
function VariableConst(x){
  if(x > 1) {
    const name = "John"
          name = "Doe"
    console.log(name)
  }
  console.log(name)
}
VariableConst()
```

Pada saat kapan variable var,let dan const dapan di pakai ?
 ```note
  *variable var dapan dipakai ketika ingin data selalu muncul walaupun variable nya tetap sama.
  *variable Let dapat dipakai ketika ingin data data objek nya saja yang di ganti.
  *Variable Const dapat dipakai ketika ingin data objek itu tetap atau tidak berubah berubah
  ```
  
 Namun saat ini karna syntax var sudah lama , maka sekarang yang dipakai adalah Syntax Let .
 karna let itu hampir sama dengan const dan var.
 
 Scope itu merupakan aksebilitas variable,fungsi dan objek dibeberapa bagian dari kode selama waktu proses.
 scope di bagi menjadi dua.
 ```
 local scope
 global scope
 
 ```
 Local Scope , variable yang dapat diakses di ruang lingkup function saja .
 example.
 ```javascript
 function localScope(){
  for(var i = 0 ; i < 10 ; i++){
   console.log(i);
  }
 }
 
 localScope();
 ```
 Global Scope , variable yang dapat diakses dimana saja .
 example.
 ```javascript
 var i = 0 ; 
 function globalScope(){
   for(i;i<5;1++){
     console.log(i) //0,1,2,3,4
   }
 }
   globalScope()
   console.log(i) //5
 ```
