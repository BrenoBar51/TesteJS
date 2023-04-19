const inputValue = document.getElementById('titulo')
const valor1 = prompt('valor 1')
const valor2 = prompt('valor 2')

const multi = valor1 * valor2

inputValue.innerHTML = multi

console.log(multi)