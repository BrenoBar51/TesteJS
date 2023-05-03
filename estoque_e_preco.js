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