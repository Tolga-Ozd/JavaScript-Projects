console.log("JS Modules is running")

//! module kullanımında this objesi window nesnesini göstermez

console.log(window);
console.log(this)    //undefined

import {CALIŞMA_SAATI , maas } from "./mymodule.js"
import {arttir , azalt } from "./mymodule.js"

console.log(CALIŞMA_SAATI);
console.log(maas);

console.log(arttir(5));
console.log(azalt(5));

//!Export Default (süslü parantez kulanılmaz)

import mesajVer from "./mymodule.js"

mesajVer()

//! bazen farklı modüllerden aynı elemanı import etmek gerekebilir. Bunun için as ile isim değişikliği yapmak mantıklı olacaktır.

import {arttir as inc, azalt as dec } from "./mymodule.js"