// var string  
var a = "aamira kalila "
console.log(`ini adalah variable string ${a}`)

// var numbers 
var a = 100
console.log(`ini adalah variable angka ${a}`)

// var array 
var a = [100,"putri","mami",11.3,"200"]
console.log(`ini adalah variable array ${a}`)
console.log(`ini adalah variable array ${a[2]}`)

// var object
// create object literal( object langsung diisi)
var a = {
    //object properties , pasangannya key:value 
    nama : " aamira kalila e.h ",
    umur :16,
    alamat : " lippo ", 
    hobby :["makan ", "tidur "],
    energi :100,
    //method 
    salam:function(waktu){
        console.log(`selamat ${waktu} . . ${this.nama}`)
    },
    makan:function(piring){
        this.energi += 10*piring
        console.log(`energiku sekarang ${this.energi}`)
    },
    bermain:function(jam){
        this.energi -= 30*jam
        console.log(`energiku sekarang ${this.energi}`)
    }
}
console.log(`ini adalah variable object ${a}`)
console.log(`ini adalah variable object ${a.umur}`)
console.log(`ini adalah variable object ${a.hobby}`)

var salam=a.salam("malam")
console.log(a.salam("sore"))

console.log(salam)

var energi=a.makan(2)
console.log(energi)

var energi_main=a.bermain(3)
console.log(energi_main)

//contoh 
for(b=0;b<10;b++)
console.log(b)