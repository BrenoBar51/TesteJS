//const titulo = document.querySelector('#titulo')
//titulo.innerHTML = 'Olá Mundo!'

//if(titulo){
  //console.log(false)

//} else{
  //console.log(true)
//}
// const tipo = undefined

// if(titulo === String){
  // console.log(true);
// } else if(titulo === Boolean){
  // console.log(false);
// } else{
  // console.log('outro');
// }
/**
 * Tipos de dados:
 * números -> number
 * verdadeiro ou falso -> Boolean
 * caracteres (numeros, caracteres especiais, letras) -> string
 * nao existe -> null
 * nao identificado -> undefined
 */

/**
 * identificar quanto a pessoa vai receber de mesada
 * se a idade for menor que 15 e maior que 10 a mesada = 150 reais
 * se for maior que 14 ou menor que 20 a mesada = 300
 * se idade for maior que 20 = menssagem ("vai trabalhar, vagabundo")
 * receber a idade (input)
 * verificar a idade
 * retornar o resultado/mensagem (output)
 */

const idade = prompt('coloque sua idade');
console.log(idade)
if(idade > 10 && idade < 15) {
  console.log('mesada igual R$150 ')
}
else if(idade > 14 && idade < 20) {
  console.log('mesada igual R$300')
}
else if(idade < 11) {
  console.log('Vai catar moeda na rua')
}
else if(idade > 19) {
  console.log('Vai trabalhar, vagabundo')
}