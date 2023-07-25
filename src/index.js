const user01 = new Object()
user01.id = 1
user01.nome = "Fernanda"
user01.idade = 27

const user02 = new Object()
user02.id = 2
user02.nome = "Mariano"
user02.idade = 39

const user03 = new Object()
user03.id = 3
user03.nome = "Paula"
user03.idade = 58

const user04 = new Object()
user04.id = 4
user04.nome = "Dirceu"
user04.idade = 19

const car01 = new Object()
car01["marca"] = "fiat"

const car02 = new Object()
car02.marca = "ford"

console.log(Object.keys(user01)) // [ 'id', 'nome', 'idade' ]
console.log(Object.keys(user02)) // [ 'id', 'nome', 'idade' ]
console.log(Object.keys(user03)) // [ 'id', 'nome', 'idade' ]
console.log(Object.keys(user04)) // [ 'id', 'nome', 'idade' ]
console.log(Object.keys(car01)) // [ 'marca' ]
console.log(Object.keys(car02)) // [ 'marca' ]

console.log(Object.values(user01)) // [ 1, 'Fernanda', 27 ]
console.log(Object.values(user02)) // [ 2, 'Mariano', 39 ]
console.log(Object.values(user03)) // [ 3, 'Paula', 58 ]
console.log(Object.values(user04)) // [ 4, 'Dirceu', 19 ]
console.log(Object.values(car01)) // [ 'fiat' ]
console.log(Object.values(car02)) // [ 'ford' ]

console.log(Object.entries(user01)) // [ [ 'id', 1 ], [ 'nome', 'Fernanda' ], [ 'idade', 27 ] ]
console.log(Object.entries(user02)) // [ [ 'id', 2 ], [ 'nome', 'Mariano' ], [ 'idade', 39 ] ]
console.log(Object.entries(user03)) // [ [ 'id', 3 ], [ 'nome', 'Paula' ], [ 'idade', 58 ] ]
console.log(Object.entries(user04)) // [ [ 'id', 4 ], [ 'nome', 'Dirceu' ], [ 'idade', 19 ] ]
console.log(Object.entries(car01)) // [ [ 'marca', 'fiat' ] ]
console.log(Object.entries(car02)) // [ [ 'marca', 'ford' ] ]

user01.idade = user01.idade + 1
console.log(Object.entries(user01)) // [ [ 'id', 1 ], [ 'nome', 'Fernanda' ], [ 'idade', 28 ] ]

Object.defineProperty(user01, 'cpf', {
    enumerable: true, // se é um dado sigiloso
    writable: false, // se é alteravel
    value: '487.398.125-90' // valor do dado
})
console.log(Object.entries(user01))

console.log(user01) // { id: 1, nome: 'Fernanda', idade: 28, cpf: '487.398.125-90' }

const empresa = "EBAC"

user01.empresa = empresa
user02.empresa = empresa
user03.empresa = 'Google'
user04.empresa = 'Apple'

console.log(user01) 
/* 
{
  id: 1,
  nome: 'Fernanda',
  idade: 28,
  cpf: '487.398.125-90',
  empresa: 'EBAC'
}
*/

console.log(user02) // { id: 2, nome: 'Mariano', idade: 39, empresa: 'EBAC' }
console.log(user03) // { id: 3, nome: 'Paula', idade: 58, empresa: 'Google' }
console.log(user04) // { id: 4, nome: 'Dirceu', idade: 19, empresa: 'Apple' }

user01.filhos = {
    filho01 : "Amanda",
    filho02 : "Luiz",
    filho03 : "Ricardo"
}

console.log(user01)

console.log(Object.entries(user01.filhos))
/*
[
  [ 'filho01', 'Amanda' ],
  [ 'filho02', 'Luiz' ],
  [ 'filho03', 'Ricardo' ]
]
*/