# bima-variable-js

## 1 . Perbedaan variable var, let, dan const.

semua Varibel ini termasuk sintaks yang di siapkan oleh Javascript , jadi ini bentuk default dan tidak dapat dibuat sendiri atau di edit.

### varibel var 
  Pendeklarasian variabel yang dapat diubah ( reassign ) isinya, bersifat function-scoped.
  
  Contoh
    var didalam Fungsi.
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
    
 Contoh
   var diluar Fungsi.
    jika var dideklarasikan di luar function itu variabel bersifat Global.
  ```javascript
    var i = 0;
    function variableVar(){
      for(i<5;i++){
        console.log(i); // 0,1,2,3,4
      }
    }
    Variable();
    console.log(i) // 5
  ````
    
 ### Variabel let 
 Mirip dengan var nilainya dapat diubah kembali (reassign), namun bersifat block-scoped.
```javascript
 function variableLet(x) {
  if(x > 1) {
    let name = "Belajar Javascript"
        name = 'Hello World'
    console.log(hello)
  }
  console.log(hello)
}
VariableLet()
```
 ### Variabel const
 Hampir mirip dengan const bersifat block-scoped, bedanya const nilainya tidak dapat diubah.
  
 ```javascript
function variableConst(x){
  if(x > 1) {
    const name = "John"
          name = "Doe"
    console.log(name)
  }
  console.log(name)
}
VariableConst()
```
### 2. Kapan menggunakan let dan kapan menggunakan const

Pada saat kapan variabel var,let dan const dapan di pakai ?
 ```note
  1. variable var dapan dipakai ketika ingin data selalu muncul walaupun variable nya tetap sama.
  2. variable Let dapat dipakai ketika ingin data data objek nya saja yang di ganti.
  3. Variable Const dapat dipakai ketika ingin data objek itu tetap atau tidak berubah berubah
  ```
 ### 3. Jika var sudah tidak digunakan lagi / sudah tidak jaman, seharusnya pakai apa?
 
 Saat ini karna syntaks var sudah lama , maka sekarang yang dipakai adalah Syntaks Let .
 karna let itu hampir sama dengan const dan var.
 
 ### 4 .Apa itu scope ?
 
 Scope itu merupakan aksebilitas variabel,fungsi dan objek dibeberapa bagian dari kode selama waktu proses.
 scope di bagi menjadi dua.
 ```
 local scope
 global scope
 
 ```
 
 Local Scope , variabel yang dapat diakses di ruang lingkup function saja .
 Contoh
 ```javascript
 function localScope(){
  for(var i = 0 ; i < 10 ; i++){
   console.log(i);
  }
 }
 
 localScope();
 ```
 Global Scope , variabel yang dapat diakses dimana saja .
 Contoh
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
