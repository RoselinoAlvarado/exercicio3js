let seunome = (prompt("Digite seu primer nome."))
let seusobrenome = (prompt("Digite seu segundo nome."))
let suaidade = Number(prompt("Digite sua idade."))
let seucor = (prompt("Digite sua cor favorita."))
let seupasstempo = (prompt("Digite seu passatempo."))

/* console.log(nome1)
console.log(nome2)
console.log(idade)
console.log(cor) */

console.table({
    Nome: seunome,
    Sobrenome: seusobrenome,
    Anos: suaidade,
    Cor: seucor,
    Passatempo: seupasstempo
})
