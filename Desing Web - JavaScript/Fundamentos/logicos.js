/* 
V &&/e V = V
 V &&/e F = F
 F &&/e ? = F
 
 ----------------- || Ou
 V ||/ou ? = V
 F ||/ou V = V
 F ||/ou F = F

 ----------------- !=  Ou Exclusivo 
 V xor V = F
 V xor F = V
 F xor V = V
 F xor F = F
-------------------- Operação unitaria
 !V = F
 !F = V
*/

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1  || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador unario

    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}
}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false,true))
console.log(compras(false,false))