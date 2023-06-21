console.log("My Module Loaded")

//!Named export

export const CALIŞMA_SAATI = 40
export let maas = 20000

let sayac = 0
export const arttir = (miktar) => {
    sayac += miktar 
    return sayac
}

export const azalt = (miktar) =>{
    sayac -= miktar
    return sayac
} 

//!Export Default (her modulde sadece birtane olur)