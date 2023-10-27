import months from './months.js'

// Filtro de meses
const filteredMonths31 = months.filter((months)=> {
    return months.days == 31
})

const filteredMonths = months.filter((months)=> {
    return months.days == 30
})

console.log(filteredMonths)

let toPrint = ''

// Listagem de meses
filteredMonths.forEach(month => {
    toPrint += month.month + ', '
});

//for(let c = 0; c < filteredMonths.length; c++){}

// array comum
let meses = [30,30,30,30]

// Reduce: Função com todos os itens do array e devolve um valor unico
let sumMonthDays = filteredMonths.reduce((prev, next) => {
    return {days: prev.days + next.days}
})

// Map: Funções em arrays de retorno individual (cada valor array)
let cachorros = [10,15,7,9,3]

let years = cachorros.map((cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = toPrint + '<br> Soma dos dias dos meses selecionados: ' + sumMonthDays.days + '<br> idade humana dos cachorros: ' + years