const nota1 = parseFloat(prompt('Digite a primeira nota:'));
const nota2 = parseFloat(prompt('Digite a segunda nota:'));
const media = (nota1 + nota2)/2;
console.log('Notas:', nota1, nota2, 'Média:', media);

if(media === 10){
  console.log('Passou e ainda frescou');
}
else if(media < 7 && media >=0){
  console.log('Vai repetir de ano');
}
else if(media >= 7 && media <= 9){
  console.log('Passou');
}
else{
  console.log('Nota inválida');
}