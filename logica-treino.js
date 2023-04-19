/*const idade = prompt('coloque sua idade');
console.log(idade)
if(idade > 17) {
  console.log('Pode entrar e encher a cara')
}
else if(idade < 18){
  console.log('Fica só olhando')
}*/
const nota1 = prompt('nota 1')
const nota2 = prompt('nota 2')
const nota3 = prompt('nota 3')
const nota4 = prompt('nota 4')
const nota5 = prompt('nota 5')
const nota6 = prompt('nota 6')
const media = (nota1+nota2+nota3+nota4+nota5+nota6) / 6
console.log(nota1,nota2,nota3,nota4,nota5,nota6,media)
if(media === 10){
  console.log('Passou e ainda frescou')
}
else if(media <= 7 && = 8 ){
  console.log('Passou morrendo')
}
else if(media >= 7){
  console.log('Vai repetir de ano..., de novo')
}