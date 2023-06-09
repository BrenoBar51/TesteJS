/**
 * Repetições com for
 * for - iterações sobre o indice
 * for...in - iterações sobre os valores de um objeto
 * for...of - iterações sobre os valores de diversos tipos de dados 
 */
/*const div = document.getElementById('exemplo')

const arrayFor = [1, 2, 3, 4, 5, 6]
//                0, 1, 2, 3, 4, 5
for (let i = 0; i < arrayFor.length; i++){
    div.innerHTML += arrayFor[i]
    console.log(arrayFor[i])
}

const objeto = {
    "nome": "Breno",
    "idade": 18,
    "profissão": "Várias"
}

for (let value in objeto){
    console.log(`${value}: ${objeto[value]}`)
}

const nomes = ['Breno', 'Barcelos', 'De Oliveira']

for (let nome of nomes){
    console.log(nome)
}

const usuarios = {objeto, objeto, objeto, objeto}

for (let usuario of usuarios){
    console.log(usuario.nome)
}*/
// inicio da aula
/*const div = document.getElementById('exemplo')
const arrayFor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numero = parseInt()

for (let i = 0; i < arrayFor.length; i++){
    div.innerHTML += arrayFor[i]
    console.log(arrayFor[i])
}

if (valor === 1) {
    console.log(arrayFor * 1)
}
else if (valor === 2) {
    console.log(arrayFor * 2)
}*/
//tabuada chatgpt
/*const numero = parseInt(prompt('Digite aqui um numero de 1 a 10'))

for (let i = 1; i <= 10; i++){
    const resultado = numero * i;
    let tabuada = '';
    for(const multiplicador of [numero, i, resultado]) {
        tabuada += `${multiplicador}\t`;
    }
    console.log(tabuada);
}*/
//tabuada feita pelo professor
/*const num = 5
const tabuadaValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(let valor of tabuadaValue){
    console.log(`${valor} x ${num} = ${valor * num}`)
}
for(let i = 0; i < tabuadaValue.length; i++){
    div.innerHTML += `<p>${tabuadaValue[i]} x ${num} = ${tabuadaValue[i] * num}</p>`
}*/
const div = document.getElementById('exemplo')
const prods = document.getElementById('produtos')
const produtos = [
    {
        "nome": "mouse",
        "quantidade": 18,
        "preco": 10
    },
    {
        "nome": "teclado",
        "quantidade": 30,
        "preco": 40
    },
    {
        "nome": "monitor",
        "quantidade": 10,
        "preco": 70
    },
    {
        "nome": "gabinetes",
        "quantidade": 18,
        "preco": 100
    },
    {
        "nome": "headset",
        "quantidade": 8,
        "preco": 10
    },
]
for(let produto of produtos){
    let total = produto.preco * produto.quantidade
    prods.innerHTML += 
    `<p>
        Estoque total ${produto.nome} - 
        ${total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}
    </p>`
}